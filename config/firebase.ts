import admin from "firebase-admin";
import { config } from "dotenv";
config();

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.applicationDefault(),
	});
}
export const db = admin.firestore();
