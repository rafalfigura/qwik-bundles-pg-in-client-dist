import PG from 'pg';
import { Kysely, PostgresDialect } from "kysely";
import type { Database } from "./db.server";

let _db!: Kysely<Database>;

export function x(){

}

export function getKysely() {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!_db) {
    throw new Error("DB not set");
  }
  return _db;
}
interface Config {
  // connectionString: string;
  database: string;
  host: string;
  password: string;
  user: string;
  port: number;
}

export async function initializeDbIfNeeded(config: Config) {
  const FACTOR = 1000;
  let counter = 0
  let average = 100;
  // eslint-disable-next-line
  if (!_db) {
    console.log(`Initializing postgres kysely connection`);
    // const {Pool} = pkg;
    const dialect = new PostgresDialect({
      pool: new PG.Pool({
        ...config,
        max: 5,
      }),
    });
    // @ts-ignore
    _db = new Kysely<Database>({
      dialect,
      log(event) {
        counter += 1;
        average = average + (event.queryDurationMillis - average) / Math.min(counter, FACTOR)
        // if(event.queryDurationMillis > average*2) {
          console.warn(`Duration: ${Math.round(event.queryDurationMillis)}ms, query: ${event.query.sql}`);
        // }
      }
    });
  }
}
