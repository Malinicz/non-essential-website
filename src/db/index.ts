import { createPool } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema";

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL environment variable is not set");
}

const pool = createPool({
  connectionString: process.env.POSTGRES_URL,
});

export const db = drizzle(pool, { schema });
