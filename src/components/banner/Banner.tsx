import React from "react";
import "./Banner.css";
import Box from "@mui/material/Box";

export default function Banner() {
	return (
		<Box sx={boxStyle}>
			<h1 className="banner-container_header">
				Explore the Studio Ghibli Universe
			</h1>
			<p className="banner-container_details">
				Based in Tokyo, Studio Ghibli Inc. is a Japanese animation film studio
				best known for their high quality filmmaking and artistry, as well as
				their visionary and thought-provoking works, which have received
				widespread acclaim worldwide.
			</p>
		</Box>
	);
}

const boxStyle = {
	width: "100vw",
	height: 410,
	backgroundColor: "rgba(82, 86, 31, 0.75)",
	display: "flex",
	flexFlow: "column wrap",
	margin: "0 0 0 0",
	justifyContent: "center",
	alignItems: "center",
};
