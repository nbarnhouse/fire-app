--Database should be called fire_db

-- Create the tables
CREATE TABLE IF NOT EXISTS "locations" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"name" text NOT NULL,
	"city" text NOT NULL,
	"state" text NOT NULL,
	"photo" text NOT NULL,
	"available_units" bigint NOT NULL,
	"healthcare_score" text NOT NULL,
	"laundry" boolean NOT NULL,
	"col" bigint NOT NULL,
	"population" bigint NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "about" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"location_id" bigint NOT NULL,
	"col_narrative" text,
	"transport_narrative" text,
	"system_narrative" text,
	"health_narrative" text,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "transport_bullets" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"about_id" bigint NOT NULL,
	"bullet" text,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "system_bullets" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"about_id" bigint NOT NULL,
	"bullet" text,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "healthcare_bullets" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"about_id" bigint NOT NULL,
	"bullet" text,
	PRIMARY KEY ("id")
);


ALTER TABLE "about" ADD CONSTRAINT "about_fk1" FOREIGN KEY ("location_id") REFERENCES "locations"("id");
ALTER TABLE "transport_bullets" ADD CONSTRAINT "transport_bullets_fk1" FOREIGN KEY ("about_id") REFERENCES "about"("id");
ALTER TABLE "system_bullets" ADD CONSTRAINT "system_bullets_fk1" FOREIGN KEY ("about_id") REFERENCES "about"("id");
ALTER TABLE "healthcare_bullets" ADD CONSTRAINT "healthcare_bullets_fk1" FOREIGN KEY ("about_id") REFERENCES "about"("id");

-- import seed data
-- 1. Import locations_xxx.csv to locations table
-- 2. Import about_xxx.csv to about table
-- 3. Import transport_bullets.csv to transport_bullets table
