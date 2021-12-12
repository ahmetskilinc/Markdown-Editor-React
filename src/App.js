import React from "react";
import { MarkdownEditor, Sheets } from "./pages";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Sheets />} />
				<Route path="/editor/:id" element={<MarkdownEditor />} />
			</Routes>
		</BrowserRouter>
	);
};
