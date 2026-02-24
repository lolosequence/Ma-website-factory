# ─── Stage 1 : Toutes les dépendances (build + dev) ──────────────────────────
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

ARG DATABASE_URL
ARG PAYLOAD_SECRET
ENV DATABASE_URL=$DATABASE_URL
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--no-deprecation --max-old-space-size=8000"

RUN mkdir -p ./public/media
RUN npm run build

# ─── Stage 3 : Dépendances production uniquement ─────────────────────────────
FROM node:22-alpine AS prod-deps

WORKDIR /app

COPY .npmrc package.json package-lock.json* ./
RUN npm ci --omit=dev

# ─── Stage 4 : Runner production ──────────────────────────────────────────────
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# node_modules production (contient payload pour les migrations)
COPY --from=prod-deps --chown=nextjs:nodejs /app/node_modules ./node_modules

# Build Next.js compilé
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Source Payload (requis par payload migrate pour charger la config TypeScript)
COPY --from=builder --chown=nextjs:nodejs /app/src ./src

# Fichiers de config
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/next.config.mjs ./next.config.mjs
COPY --from=builder --chown=nextjs:nodejs /app/tsconfig.json ./tsconfig.json

# Assets publics
RUN mkdir -p ./public/media && chown nextjs:nodejs ./public/media
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# 1. Applique les migrations (crée les tables si elles n'existent pas)
# 2. Démarre le serveur Next.js
CMD ["sh", "-c", "NODE_OPTIONS=--no-deprecation node node_modules/.bin/payload migrate && NODE_OPTIONS=--no-deprecation npm start"]
