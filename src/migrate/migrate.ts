import "dotenv/config";

import { connection, db } from "@/db";
import { migrate } from "drizzle-orm/postgres-js/migrator";

(async () => {
	await migrate(db, { migrationsFolder: "drizzle" });
	await connection.end(); // Remember to close the db connection
})();
