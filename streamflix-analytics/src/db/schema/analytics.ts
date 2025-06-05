import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const analytics = pgTable('analytics', {
  id: text().primaryKey(),
  userId: text().notNull(),
  contentId: text().notNull(),
  action: text().notNull(),
  value: integer().notNull(),
  createdAt: timestamp().notNull().defaultNow()
})