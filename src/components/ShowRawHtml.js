import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import micromark from "micromark";
import gfmSyntax from "micromark-extension-gfm";
import gfmHtml from "micromark-extension-gfm/html";
import { MarkdownViewer } from "./";
import DoneIcon from "@material-ui/icons/Done";
import { CopyToClipboard } from "react-copy-to-clipboard";
import RawHTML from "./RawHTML";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		padding: theme.spacing(1),
		alignItems: "center",
		justifyContent: "center",
	},
	root: {
		width: 700,
		maxHeight: "500px",
		overflow: "scroll",
	},
}));

export const ShowRawHtml = ({ markdownToParse }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [result, setResult] = useState();
	const [fileInner, setFileInner] = useState();
	const [copied, setCopied] = useState(false);
	const [downloaded, setDownloaded] = useState(false);
	const [fileType, setFileType] = useState("");

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleDownload = () => {
		let x;
		if (fileType === "html") {
			x = fileInner;
		} else if (fileType === "md") {
			x = markdownToParse;
		}
		const element = document.createElement("a");
		const file = new Blob([x], { type: `text/${fileType}` });
		element.href = URL.createObjectURL(file);
		element.download = `index.${fileType}`;
		document.body.appendChild(element); // Required for this to work in FireFox
		element.click();
		setDownloaded(true);
	};

	useEffect(() => {
		const parsed = micromark(markdownToParse, {
			extensions: [gfmSyntax()],
			htmlExtensions: [gfmHtml],
		});

		const res = markdownToParse
			? RawHTML(parsed)
			: `Start by typing in the text box on the right.\nUse the cheat sheet if you need to!`;
		setFileInner(res);
		setResult(`\`\`\`html
${res}
\`\`\``);

		setCopied(false);
		setDownloaded(false);
	}, [markdownToParse]);

	const changeFileType = (event) => {
		setFileType(event.target.value);
		setCopied(false);
		setDownloaded(false);
	};

	return (
		<>
			<Button color="inherit" onClick={handleOpen}>
				Show Raw File
			</Button>
			<div>
				<Modal
					className={classes.modal}
					open={open}
					onClose={handleClose}
				>
					<Card className={classes.root}>
						<CardHeader
							action={
								<IconButton
									aria-label="close"
									onClick={handleClose}
								>
									<CancelIcon />
								</IconButton>
							}
							title="Raw File"
						/>
						<CardContent
							style={{
								maxHeigth: "500px",
								overflow: "scroll",
								padding:
									markdownToParse.length < 0
										? "16px"
										: "0 16px",
							}}
						>
							<MarkdownViewer
								content={
									fileType === "html"
										? result
										: markdownToParse
								}
								lineNumbers={false}
							/>
						</CardContent>
						{markdownToParse.length < 1 ? (
							""
						) : (
							<CardActions style={{ padding: "16px" }}>
								<FormControl
									style={{ width: 120 }}
									variant="outlined"
									className={classes.formControl}
								>
									<InputLabel id="select-label">
										Download As
									</InputLabel>
									<Select
										labelId="select-label"
										value={fileType}
										onChange={changeFileType}
										label="Download as"
									>
										<MenuItem value={"html"}>
											.html
										</MenuItem>
										<MenuItem value={"md"}>.md</MenuItem>
									</Select>
								</FormControl>
								<CopyToClipboard
									text={
										fileType === "html"
											? fileInner
											: markdownToParse
									}
									onCopy={() => setCopied(true)}
								>
									<Button
										color="secondary"
										variant="contained"
										disabled={copied ? true : false}
									>
										Copy
									</Button>
								</CopyToClipboard>
								{copied ? <DoneIcon /> : ""}
								<Button
									color="secondary"
									variant="contained"
									disabled={downloaded ? true : false}
									onClick={handleDownload}
								>
									Download File
								</Button>
								{downloaded ? <DoneIcon /> : ""}
							</CardActions>
						)}
					</Card>
				</Modal>
			</div>
		</>
	);
};
