import React from "react";
import Button from "@material-ui/core/Button";

export const NewSheet = () => (
	<Button color="inherit" onClick={() => (window.location = `/new`)}>
		New File
	</Button>
);
