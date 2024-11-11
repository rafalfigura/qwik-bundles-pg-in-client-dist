import {initializeApp, cert, getApps, getApp, } from "firebase-admin/app";

export async function initializaFirebaseAdminIfRequired(client_email: string, private_key:string, project_id:string, bucket: string) {
    if (getApps().length == 0) {
        initializeApp({
            credential: cert({
                projectId: project_id,
                clientEmail: client_email,
                privateKey: private_key,
            }),
            storageBucket: bucket,
        })
    }
}
