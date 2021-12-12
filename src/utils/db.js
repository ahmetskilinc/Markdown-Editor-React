import Localbase from "localbase";
import { v4 as uuid } from "uuid";

let db = new Localbase("db");

// check if anything in db
export const getSheetsFromDb = async () => {
	const sheets = await db.collection("apiKey").get();
	if (sheets.length > 0) {
		return sheets;
	}
};

// save to db
export const setUserApiKeyToDb = async (key) => {
	await db.collection("apiKey").set([{ key: key }]);
};
