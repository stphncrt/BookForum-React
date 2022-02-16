import React from "react";
import BookDetail from "./pages/bookDetailPage";
import MainPage from "./pages/mainPage.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/detail" element={<BookDetail />} /> <Route path="/" element={<MainPage />} />{" "}
			</Routes>{" "}
		</BrowserRouter>
	);
}

export default Router;
