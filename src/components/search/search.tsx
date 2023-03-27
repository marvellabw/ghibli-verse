import { useState } from "react";
import "./search.css";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

interface IProps {
	data: any;
}

function Searchbar({ data }: IProps) {
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState<string>("");

	const findId = (inputValue: string) => {
		for (let film in data) {
			if (data[film].label === inputValue) {
				fetchResults(data[film].id);
			}
		}
	};

	const fetchResults = (id: string) => {
		axios.get(`https://ghibliapi.herokuapp.com/films/${id}`).then((res) => {
			navigate("/details", { state: res.data });
		});
	};

	return (
		<div className="search-container">
			<Autocomplete
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					setInputValue(newInputValue);
				}}
				id="controllable-states-demo"
				options={data}
				sx={searchbarStyle}
				renderInput={(params) => <TextField {...params} label="Search" />}
			/>
			<Button
				variant="contained"
				onClick={() => {
					findId(inputValue);
				}}
				sx={buttonStyle}
			>
				Go
			</Button>
		</div>
	);
}

const searchbarStyle = {
	open: true,
	width: 600,
	height: 55,
	borderColor: "rgb(106, 111, 42)",
	color: "rgb(82, 86, 31)",
	borderRadius: 2,
	border: 2,
	boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.25)",
	marginRight: 5,
};

const buttonStyle = {
	borderColor: "rgb(106, 111, 42)",
	backgroundColor: "white",
	height: 55,
	width: 80,
	"&:hover": {
		backgroundColor: "rgba(82, 86, 31, 0.75)",
		color: "white",
	},
	borderRadius: 1,
	color: "rgb(82, 86, 31)",
};

export { Searchbar };
