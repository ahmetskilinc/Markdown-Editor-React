import React from "react";
import {
	Button,
	Modal,
	Card,
	CardContent,
	CardHeader,
	IconButton,
	Paper,
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
} from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";

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
	table: {
		backgroundColor: "blue",
	},
	zeroPaddingMargin: {
		padding: 0,
		margin: 0,
	},
}));

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const CheatSheet = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button color="inherit" onClick={handleOpen}>
				Cheat Sheet
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
						<CardContent style={{ padding: "0 16px 16px", maxHeight: 800, overflow: "scroll" }}>
							<TableContainer component={Paper}>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>Exmaple</TableCell>
											<TableCell>Markdown</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell>
												<h1 className={classes.zeroPaddingMargin}>Heading 1</h1>
												<h2 className={classes.zeroPaddingMargin}>Heading 2</h2>
												<h3 className={classes.zeroPaddingMargin}>Heading 3</h3>
												<h4 className={classes.zeroPaddingMargin}>Heading 4</h4>
											</TableCell>
											<TableCell>
												<p className={classes.zeroPaddingMargin}># Heading 1</p>
												<p className={classes.zeroPaddingMargin}>## Heading 2</p>
												<p className={classes.zeroPaddingMargin}>### Heading 3</p>
												<p className={classes.zeroPaddingMargin}>#### Heading 4</p>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<a href="https://google.com/" className={classes.zeroPaddingMargin}>
													I'm an inline-style link
												</a>
												<a href="https://google.com/" className={classes.zeroPaddingMargin}>
													I'm an inline-style link
												</a>
											</TableCell>
											<TableCell>
												<p className={classes.zeroPaddingMargin}>
													[I'm an inline-style link](https://www.google.com)
												</p>
												<p className={classes.zeroPaddingMargin}></p>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</CardContent>
					</Card>
				</Modal>
			</div>
		</>
	);
};

/**
 *
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]
 */
