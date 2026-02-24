# ─── Stage 1 : Dépendances ────────────────────────────────────────────────────
FROM node:22-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY .npmrc package.json package-lock.json* ./
RUN npm ci

# ─── Stage 2 : Build ──────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variables nécessaires à Payload lors du build Next.js
# Passer via --build-arg dans Dokploy ou docker build
ARG DATABASE_URL
ARG PAYLOAD_SECRET
ENV DATABASE_URL=$DATABASE_URL
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--no-deprecation --max-old-space-size=8000"

# Crée le dossier public/media (uploads Payload) avant le build
RUN mkdir -p ./public/media

RUN npm run build

# ─── Stage 3 : Runner production ──────────────────────────────────────────────
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Dossier public (assets statiques + media uploads)
RUN mkdir -p ./public/media
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Cache de rendu Next.js
RUN mkdir .next && chown nextjs:nodejs .next

# Build standalone (contient server.js + toutes les dépendances tracées)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Volume recommandé pour les uploads Payload en production :
# docker run -v /data/media:/app/public/media ...
CMD ["node", "server.js"]
