import type { RequestHandler } from "@builder.io/qwik-city";
import { initializaFirebaseAdminIfRequired } from "~/server/firebase.admin.server";
import { initializeDbIfNeeded } from "~/server/mysql.server";

export const onRequest: RequestHandler = async function ({ env }) {
  try{
    const PUBLIC_FIREBASE_BUCKET = env.get("PUBLIC_FIREBASE_BUCKET")!;
    const FIREBASE_CLIENT_EMAIL = env.get("FIREBASE_CLIENT_EMAIL")!;
    const FIREBASE_PRIVATE_KEY = env.get("FIREBASE_PRIVATE_KEY")!;
    const FIREBASE_PROJECT_ID = env.get("FIREBASE_PROJECT_ID")!;

    await initializaFirebaseAdminIfRequired(
      FIREBASE_CLIENT_EMAIL,
      FIREBASE_PRIVATE_KEY,
      FIREBASE_PROJECT_ID,
      PUBLIC_FIREBASE_BUCKET,
    );

    const DB_HOST = env.get("DB_HOST")!;
    const DB_NAME = env.get("DB_NAME")!;
    const DB_PORT = env.get("DB_PORT")!;
    const DB_USER = env.get("DB_USER")!;
    const DB_PASSWORD = env.get("DB_PASSWORD")!;

    await initializeDbIfNeeded({
      host: DB_HOST,
      database: DB_NAME,
      port: +DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
    });
  } catch(e) {
    console.error(`Cought error in plugin 1_db.ts`);
    console.error(e);
    // throw new Error('Unable to connect to the database')
  }
};
