import React from "react";

export const Editor = ({ handleChange }) => {
	return (
		<div className="textarea-container">
			<textarea placeholder="Start here..." onChange={(e) => handleChange(e)} />
		</div>
	);
};
