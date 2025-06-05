import { date, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const contents = pgTable('contents', {
  id: text().primaryKey(),
  name: text().notNull(),
  description: text().notNull(),
  contentURL: text().notNull(),
  thumbnail: text().notNull(),
  releaseDate: date().notNull(),
  createdAt: timestamp().notNull().defaultNow()
})