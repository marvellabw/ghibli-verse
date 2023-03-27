import React from "react";
import "./Description.css";
import { Response } from "../../types/response";

interface IProps {
	data: Response;
}

export default function Description({ data }: IProps) {
	return (
		<div className="description-container">
			<img
				src={data.image}
				alt="film poster"
				className="description-container_image"
			/>
			<div className="description-container_text">
				<p>Title: {data.title}</p>
				<p>Original Title: {data.original_title}</p>
				<p>Original Title Romanised: {data.original_title_romanised}</p>
				<p>Description: {data.description}</p>
				<p>Director: {data.director}</p>
				<p>Producer: {data.producer}</p>
				<p>Release Date: {data.release_date}</p>
				<p>Running Time: {data.running_time}</p>
			</div>
		</div>
	);
}
