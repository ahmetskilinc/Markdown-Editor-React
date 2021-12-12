import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
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
							title="Raw HTML"
						/>
						<CardContent
							style={{
								padding: "0 16px 16px",
								maxHeight: 800,
								overflow: "scroll",
							}}
						>
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
												<h1
													className={
														classes.zeroPaddingMargin
													}
												>
													Heading 1
												</h1>
											</TableCell>
											<TableCell>
												<p
													className={
														classes.zeroPaddingMargin
													}
												>
													# Heading 1
												</p>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<h2
													className={
														classes.zeroPaddingMargin
													}
												>
													Heading 2
												</h2>
												<h3
													className={
														classes.zeroPaddingMargin
													}
												>
													Heading 3
												</h3>
												<h4
													className={
														classes.zeroPaddingMargin
													}
												>
													Heading 4
												</h4>
											</TableCell>
											<TableCell>
												<p
													className={
														classes.zeroPaddingMargin
													}
												>
													## Heading 2
												</p>
												<p
													className={
														classes.zeroPaddingMargin
													}
												>
													### Heading 3
												</p>
												<p
													className={
														classes.zeroPaddingMargin
													}
												>
													#### Heading 4
												</p>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<a
													href="https://google.com/"
													className={
														classes.zeroPaddingMargin
													}
												>
													I'm an inline-style link
												</a>
											</TableCell>
											<TableCell>
												<p
													className={
														classes.zeroPaddingMargin
													}
												>
													[I'm an inline-style
													link](https://www.google.com)
												</p>
												<p
													className={
														classes.zeroPaddingMargin
													}
												></p>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<strong
													className={
														classes.zeroPaddingMargin
													}
												>
													I'm some bold text
												</strong>
											</TableCell>
											<TableCell>
												<p
													className={
														classes.zeroPaddingMargin
													}
												>
													**I'm some bold text**
												</p>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												<i
													className={
														classes.zeroPaddingMargin
													}
												>
													I'm some italicised text
												</i>
											</TableCell>
											<TableCell>
												<p
													className={
														classes.zeroPaddingMargin
													}
												>
													*I'm some italicised text*
												</p>
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
