import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NewSheet, OpenMdFile } from "./";
import logo from "url:~/src/img/logo.png";
import { Link } from "react-router-dom";

export const HomeNavbar = () => {
	return (
		<AppBar position="static" elevation={0}>
			<Toolbar>
				<Link
					to="/"
					style={{
						flexGrow: 1,
						color: "#ffffff",
						textDecoration: "none",
					}}
				>
					<Typography variant="h6">
						<img src={logo} height={15} />
						Editor
					</Typography>
				</Link>
				<NewSheet />
				{/* <OpenMdFile /> */}
			</Toolbar>
		</AppBar>
	);
};
