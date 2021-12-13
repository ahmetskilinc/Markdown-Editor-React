import React from "react";
import Button from "@material-ui/core/Button";
import { saveCurrentFileToDb } from "../utils/db";

export const SaveMdSheet = ({ markdownToSave }) => {
	const handleSave = () => {
		const id = window.location.pathname.split("/")[2];
		saveCurrentFileToDb(markdownToSave, id);
	};

	return (
		<Button onClick={() => handleSave()} color="inherit">
			Save
		</Button>
	);
};
