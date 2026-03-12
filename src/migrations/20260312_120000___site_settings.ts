import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE "site_settings" (
      "id" serial PRIMARY KEY NOT NULL,
      "site_name" varchar DEFAULT 'Mon Entreprise',
      "tagline" varchar DEFAULT 'Votre partenaire de confiance',
      "primary_color" varchar DEFAULT '#2563eb',
      "hero_title" varchar DEFAULT 'Bienvenue sur notre site',
      "hero_subtitle" varchar,
      "hero_cta" varchar DEFAULT 'Nous contacter',
      "about_title" varchar DEFAULT 'À propos de nous',
      "about_text" varchar,
      "contact_email" varchar,
      "contact_phone" varchar,
      "contact_address" varchar,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE TABLE "site_settings_services" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "icon" varchar DEFAULT '✨',
      "title" varchar NOT NULL,
      "description" varchar
    );

    ALTER TABLE "site_settings_services"
      ADD CONSTRAINT "site_settings_services_parent_id_fk"
      FOREIGN KEY ("_parent_id")
      REFERENCES "site_settings"("id")
      ON DELETE CASCADE ON UPDATE NO ACTION;

    CREATE INDEX "site_settings_services_order_idx"
      ON "site_settings_services" USING btree ("_order");

    CREATE INDEX "site_settings_services_parent_id_idx"
      ON "site_settings_services" USING btree ("_parent_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "site_settings_services"
      DROP CONSTRAINT "site_settings_services_parent_id_fk";

    DROP TABLE "site_settings_services";
    DROP TABLE "site_settings";
  `)
}
