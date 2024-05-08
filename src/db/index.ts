
import { drizzle } from "drizzle-orm/postgres-js";

import { env } from "@/config/env";

import postgres from "postgres";

const globalForDb = globalThis as unknown as {
	conn: postgres.Sql | undefined;
};

export const connection = globalForDb.conn ?? postgres(env.DATABASE_URL);
if (env.NODE_ENV !== "production") globalForDb.conn = connection;

export const db = drizzle(connection, { });

export type DB = typeof db;

