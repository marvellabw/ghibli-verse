import axios from "axios";
import { useState, useEffect } from "react";
import { Navbar, Banner, Searchbar } from "../../components";
import { FilmData } from "../../types/filmData";
import { Response } from "../../types/response";

export default function HomePage() {
	const [data, setData] = useState<FilmData[]>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);

	const getData = () => {
		try {
			axios
				.get<Response[]>("https://powerful-journey-09811.herokuapp.com/films")
				.then((res) => {
					let processedData: FilmData[] = [];
					for (let data of res.data) {
						processedData.push({
							id: data.id,
							label: data.title,
							image: data.image,
						});
					}
					setData(processedData);
				});

			setIsLoading(false);
		} catch {
			setIsError(true);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			{!isLoading && !isError && (
				<>
					<Navbar />
					<Banner />
					<Searchbar data={data} />
				</>
			)}
		</>
	);
}
