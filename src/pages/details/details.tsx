import { Navbar, Links, Description } from "../../components";
import { useLocation } from "react-router-dom";

export default function DetailsPage() {
	const location: any = useLocation();
	const film = location.state;
	return (
		<>
			<Navbar />
			<Links />
			<Description data={film} />
		</>
	);
}
