import React from "react";
import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
	TableContainer,
	Table,
	TableHead,
	Paper,
	TableRow,
	TableCell,
	Typography,
	TableBody,
} from "@material-ui/core";

export const MarkdownViewer = ({ content, lineNumbers }) => {
	const renderers = {
		code: ({ language, value }) => {
			var newCode = value;
			var oldCode = value || oldCode;

			return (
				<SyntaxHighlighter
					style={materialDark}
					showLineNumbers={lineNumbers}
					language={language}
					children={newCode || ""}
				/>
			);
		},
		tableCell: ({ children }) => <TableCell>{children}</TableCell>,
		tableRow: ({ children }) => <TableRow>{children}</TableRow>,
		tableCell: ({ children }) => <TableCell>{children}</TableCell>,
		tableHead: ({ children }) => <TableHead>{children}</TableHead>,
		tableBody: ({ children }) => <TableBody>{children}</TableBody>,
		table: ({ children }) => (
			<TableContainer component={Paper}>
				<Table>{children}</Table>
			</TableContainer>
		),
	};
	return (
		<ReactMarkdown
			className={`markdown-container ${
				lineNumbers ? "" : "zero-padding"
			}`}
			components={renderers}
			plugins={[gfm]}
			children={content}
		/>
	);
};
