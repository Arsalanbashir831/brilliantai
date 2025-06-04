import * as admin from "firebase-admin";

const serviceAccount = JSON.parse(
	process.env.FIREBASE_SERVICE_ACCOUNT!
) as admin.ServiceAccount;

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: process.env.BLOG_REALTIME_DB,
		storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	});
}

export const BLOG_DB = admin.database();
export const BLOG_BUCKET = admin.storage().bucket();
