import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  schema: './src/db/*',
  out: './drizzle',
  driver: 'pg',
  // schemaFilter: ['ecotria', 'audit'],
  dbCredentials: {
    ssl: true,
    connectionString: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
} satisfies Config;
