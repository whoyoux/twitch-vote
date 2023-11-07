import type { Config } from "drizzle-kit";

import { cwd } from "node:process";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(cwd());

export default {
  schema: "./src/lib/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DRIZZLE_DATABASE_URL!,
  },
} satisfies Config;
