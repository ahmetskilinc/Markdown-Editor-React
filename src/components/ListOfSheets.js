import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OpenMdFile } from ".";
import { getSheetsFromDb } from "../utils/db";

export const ListOfSheets = () => {
	const [sheets, setSheets] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		getSheetsFromDb().then((sheets) => {
			setSheets(sheets);
			setLoaded(true);
		});
	}, []);

	return (
		<div style={{ width: "80%", margin: "0 auto" }}>
			<OpenMdFile />
			<div>
				<Typography variant="h6">Your sheets</Typography>
			</div>
			<div>
				{loaded ? (
					sheets.length > 0 ? (
						sheets.map((sheet) => {
							return (
								<React.Fragment key={sheet.id}>
									<Link to={`/editor/${sheet.id}`}>
										<Typography>
											{sheet.name || sheet.id} -{" "}
											{sheet.dateAdded || "No date"}
										</Typography>
									</Link>
								</React.Fragment>
							);
						})
					) : (
						<div>
							<Typography>No sheets</Typography>
						</div>
					)
				) : (
					<div>
						<Typography>Loading</Typography>
					</div>
				)}
			</div>
		</div>
	);
};
