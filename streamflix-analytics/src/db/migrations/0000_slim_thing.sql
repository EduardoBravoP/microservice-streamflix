CREATE TABLE "contents" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"content_url" text NOT NULL,
	"thumbnail" text NOT NULL,
	"release_date" date NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
