import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ShowRawHtml, CheatSheet } from "./";
import logo from "url:~/src/img/logo.png";

export const Navbar = ({ markdownToParse }) => {
	return (
		<AppBar position="static" elevation={0}>
			<Toolbar>
				<Typography style={{ flexGrow: 1 }} variant="h6">
					<img src={logo} height={15} />
					Editor
				</Typography>
				<ShowRawHtml markdownToParse={markdownToParse} />
				<CheatSheet />
			</Toolbar>
		</AppBar>
	);
};
