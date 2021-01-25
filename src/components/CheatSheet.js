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
											<TableCell>Dessert (100g serving)</TableCell>
											<TableCell align="right">Calories</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => (
											<TableRow key={row.name}>
												<TableCell component="th" scope="row">
													{row.name}
												</TableCell>
												<TableCell align="right">{row.calories}</TableCell>
											</TableRow>
										))}
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
