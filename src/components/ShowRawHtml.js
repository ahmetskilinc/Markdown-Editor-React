import React, { useEffect } from "react";
import { Button, Modal, Card, CardContent, CardActions, CardHeader, IconButton } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import micromark from "micromark";
import gfmSyntax from "micromark-extension-gfm";
import gfmHtml from "micromark-extension-gfm/html";
import { MarkdownViewer } from "./";
import DoneIcon from "@material-ui/icons/Done";
import { CopyToClipboard } from "react-copy-to-clipboard";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		padding: theme.spacing(1),
		alignItems: "center",
		justifyContent: "center",
	},
	root: {
		width: 700,
	},
}));

export const ShowRawHtml = ({ markdownToParse }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [result, setResult] = useState();
	const [fileInner, setFileInner] = useState();
	const [copied, setCopied] = useState(false);
	const [htmlDownloaded, setHtmlDownloaded] = useState(false);
	const [mdDownloaded, setMdDownloaded] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleHtmlDownload = () => {
		const element = document.createElement("a");
		const file = new Blob([fileInner], { type: "text/html" });
		element.href = URL.createObjectURL(file);
		element.download = "index.html";
		document.body.appendChild(element); // Required for this to work in FireFox
		element.click();
		setHtmlDownloaded(true);
	};

	const handleMdDownload = () => {
		const element = document.createElement("a");
		const file = new Blob([markdownToParse], { type: "text/markdnwo" });
		element.href = URL.createObjectURL(file);
		element.download = "document.md";
		document.body.appendChild(element); // Required for this to work in FireFox
		element.click();
		setMdDownloaded(true);
	};

	useEffect(() => {
		const parsed = micromark(markdownToParse, {
			extensions: [gfmSyntax()],
			htmlExtensions: [gfmHtml],
		});

		const res = markdownToParse
			? `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
		${parsed}
	</body>
</html>`
			: `Start by typing in the text box on the right.\nUse the cheat sheet if you need to!`;
		setFileInner(res);
		setResult(`\`\`\`html
${res}
\`\`\``);

		setCopied(false);
		setHtmlDownloaded(false);
		setMdDownloaded(false);
	}, [markdownToParse]);

	return (
		<>
			<Button color="inherit" onClick={handleOpen}>
				Show Raw File
			</Button>
			<div>
				<Modal className={classes.modal} open={open} onClose={handleClose}>
					<Card className={classes.root}>
						<CardHeader
							action={
								<IconButton aria-label="close" onClick={handleClose}>
									<CancelIcon />
								</IconButton>
							}
							title="Raw HTML"
						/>
						<CardContent style={{ padding: markdownToParse.length < 1 ? "16px" : "0 16px" }}>
							{<MarkdownViewer content={result} lineNumbers={false} />}
						</CardContent>
						{markdownToParse.length < 1 ? (
							""
						) : (
							<CardActions style={{ padding: "16px" }}>
								<CopyToClipboard text={fileInner} onCopy={() => setCopied(true)}>
									<Button color="secondary" variant="contained" disabled={copied ? true : false}>
										{copied ? (
											<>
												Copied <DoneIcon />
											</>
										) : (
											"Copy"
										)}
									</Button>
								</CopyToClipboard>
								<Button
									color="secondary"
									variant="contained"
									disabled={htmlDownloaded ? true : false}
									onClick={handleHtmlDownload}
								>
									{htmlDownloaded ? (
										<>
											.html Downloaded <DoneIcon />
										</>
									) : (
										"Download as .html"
									)}
								</Button>
								<Button
									color="secondary"
									variant="contained"
									disabled={mdDownloaded ? true : false}
									onClick={handleMdDownload}
								>
									{mdDownloaded ? (
										<>
											.md Downloaded <DoneIcon />
										</>
									) : (
										"Download as .md"
									)}
								</Button>
							</CardActions>
						)}
					</Card>
				</Modal>
			</div>
		</>
	);
};
