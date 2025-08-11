import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/pcref-db`,
  }),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: ["http://localhost:5173"],
});
