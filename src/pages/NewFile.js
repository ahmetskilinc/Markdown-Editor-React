import { v4 as uuid } from "uuid";
import { saveCurrentFileToDb } from "../utils/db";

export const NewFile = () => {
	const id = uuid();
	saveCurrentFileToDb(``, id).then(() => {
		window.location.href = `/editor/${id}`;
	});
};
