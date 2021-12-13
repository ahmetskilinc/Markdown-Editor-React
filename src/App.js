import React from "react";
import { MarkdownEditor, Sheets, NewFile } from "./pages";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Sheets />} />
				<Route path="/editor/:id" element={<MarkdownEditor />} />
				<Route path="/new" element={<NewFile />} />
			</Routes>
		</BrowserRouter>
		// <MarkdownEditor />
	);
};
