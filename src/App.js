import React, { useState } from "react";
import { Navbar } from "./components";
import { MarkdownEditor } from "./pages";
import "./App.css";

export const App = () => {
	const [markdownToParse, setMarkdownToParse] = useState(``);

	const handleMarkdownToParse = (x) => {
		setMarkdownToParse(x);
	};

	return (
		<>
			<Navbar markdownToParse={markdownToParse} />
			<MarkdownEditor markdownToParse={handleMarkdownToParse} />
		</>
	);
};
