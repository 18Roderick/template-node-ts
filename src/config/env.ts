import "dotenv/config";

import { z } from "zod";

/**
 * put the environment vars that are needed for the project
 */
const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
});

export const env = envSchema.parse(process.env);
