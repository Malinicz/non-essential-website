import { pgTable, serial, integer, timestamp, text } from "drizzle-orm/pg-core";

export const ratings = pgTable("song-ratings", {
  id: serial("id").primaryKey(),
  songId: text("song_id").notNull(),
  rating: integer("rating").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
