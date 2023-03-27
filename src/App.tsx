import React from "react";
import { ROUTES } from "./routes/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, DetailsPage } from "./pages/index";

function App() {
	return (
		<Router>
			<Routes>
				<Route path={ROUTES.HOME} element={<HomePage />} />
				<Route path={ROUTES.DETAILS} element={<DetailsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
