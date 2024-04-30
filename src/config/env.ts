import "dotenv/config"

import { z } from "zod";

const envSchema = z.object({
    PORT: z.number().default(3000),
    NODE_ENV: z.enum(["development", "production"]).default("development"),
})


export const env = envSchema.parse(process.env)