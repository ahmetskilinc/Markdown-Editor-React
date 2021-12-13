import React from "react";
// import Button from "@material-ui/core/Button";
import { DropzoneArea } from "material-ui-dropzone";
import { saveLoadedFileToDb } from "../utils/db";

export const OpenMdFile = () => {
	const openMdFileFromPc = (file) => {
		const filename = file.name;
		let reader = new FileReader();
		reader.readAsText(file);
		reader.onload = () => {
			const file = reader.result;
			saveLoadedFileToDb(file, filename).then((id) => {
				window.location.href = `editor/${id}`;
				// console.log(id);
			});
		};
	};

	return (
		// <Button color="inherit" onClick={() => openMdFileFromPc()}>
		// 	Open File
		// </Button>
		<div style={{ width: "100%", backgroundColor: "black" }}>
			<DropzoneArea
				dropzoneText="Drop a .md file or click to open one"
				onChange={(files) => {
					if (files.length > 0) openMdFileFromPc(files[0]);
				}}
				acceptedFiles={["text/markdown", "text/x-markdown"]}
				showPreviews={false}
				filesLimit={1}
			/>
		</div>
	);
};
