import React, { useState, useRef, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import FormatBoldRoundedIcon from "@material-ui/icons/FormatBoldRounded";
import FormatItalicRoundedIcon from "@material-ui/icons/FormatItalicRounded";
import StrikethroughSRoundedIcon from "@material-ui/icons/StrikethroughSRounded";
import FormatSizeRoundedIcon from "@material-ui/icons/FormatSizeRounded";
import FormatListNumberedRoundedIcon from "@material-ui/icons/FormatListNumberedRounded";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { getSheetFromDb } from "../utils/db";

const useStyles = makeStyles(() => ({
	toolbar: {
		padding: 0,
		borderBottom: `1px solid #e0e0e0`,
		"& button": {
			margin: "0 3px",
		},
		"& span": {
			flexGrow: 1,
		},
		"& svg": {
			padding: 2,
		},
		"& hr": {
			margin: "0 3px",
		},
	},
	openButton: {
		width: "22px",
	},
}));

export const Editor = ({ handleChange }) => {
	const [hidden, setHidden] = useState(false);
	const [textAreaValue, setTextAreaValue] = useState(``);
	const textArea = useRef();
	const classes = useStyles();

	useEffect(() => {
		const id = window.location.pathname.split("/")[2];
		getSheetFromDb(id)
			.then((res) => {
				if (res.file.length > 0) {
					setTextAreaValue(res.file);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleToggleEditor = () => {
		if (!hidden) setTextAreaValue(`${textArea.current.value}`);
		setHidden(!hidden);
	};

	const getTextToInsert = (type, text) => {
		switch (type) {
			case "italic":
				return `*${text}*`;
			case "bold":
				return `**${text}**`;
			case "strikethrough":
				return `~~${text}~~`;
			case "checkbox":
				return `- [ ] ${text}`;
		}
	};

	const insertMyText = (type) => {
		const start = textArea.current.selectionStart;
		const finish = textArea.current.selectionEnd;
		var newValue;
		let textBeforeCursorPosition = textArea.current.value.substring(
			0,
			start
		);
		let textAfterCursorPosition = textArea.current.value.substring(
			finish,
			textArea.current.value.length
		);
		newValue = `${textBeforeCursorPosition}${getTextToInsert(
			type,
			getSelText(start, finish)
		)}${textAfterCursorPosition}`;
		textArea.current.value = newValue;
		handleChange(newValue);
	};

	function getSelText(start, finish) {
		var sel = textArea.current.value.substring(start, finish);
		return sel.toString();
	}

	return hidden ? (
		<Button
			size="small"
			className={classes.openButton}
			onClick={() => handleToggleEditor()}
		>
			<ArrowBackIosRoundedIcon />
		</Button>
	) : (
		<div className="textarea-container">
			<Toolbar variant="dense" className={classes.toolbar}>
				<IconButton size="small" onClick={() => insertMyText("bold")}>
					<FormatBoldRoundedIcon />
				</IconButton>
				<IconButton size="small" onClick={() => insertMyText("italic")}>
					<FormatItalicRoundedIcon />
				</IconButton>
				<IconButton
					size="small"
					onClick={() => insertMyText("strikethrough")}
				>
					<StrikethroughSRoundedIcon />
				</IconButton>
				<Divider orientation="vertical" flexItem />
				<IconButton
					size="small"
					onClick={() => insertMyText("checkbox")}
				>
					<CheckBoxIcon />
				</IconButton>
				<Divider orientation="vertical" flexItem />
				<IconButton size="small" disabled>
					<FormatSizeRoundedIcon />
				</IconButton>
				<IconButton size="small" disabled>
					<FormatListBulletedRoundedIcon />
				</IconButton>
				<IconButton size="small" disabled>
					<FormatListNumberedRoundedIcon />
				</IconButton>
				<Divider orientation="vertical" flexItem />
				<span></span>
				<IconButton size="small" onClick={() => handleToggleEditor()}>
					<ArrowForwardIosRoundedIcon />
				</IconButton>
			</Toolbar>
			<textarea
				ref={textArea}
				className="text-area"
				placeholder="Start here..."
				onChange={(e) => handleChange(e.target.value)}
				defaultValue={textAreaValue}
			/>
		</div>
	);
};
