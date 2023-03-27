import React from "react";
import "./Links.css";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function Links() {
	return (
		<div className="links-container">
			<Breadcrumbs sx={breadcrumbsStyle} aria-label="breadcrumb" separator="›">
				<Link underline="hover" color="white" href="/">
					Home
				</Link>
				<Typography color="white">Details</Typography>
			</Breadcrumbs>
		</div>
	);
}

const breadcrumbsStyle = {
	paddingLeft: 5.75,
	color: "white",
};
