import { drizzle } from "drizzle-orm/neon-http";
import { neon, neonConfig } from "@neondatabase/serverless";

import * as schema from "./schema";

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
neonConfig.fetchConnectionCache = true;

export const db = drizzle(sql, { schema });
