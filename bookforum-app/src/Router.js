import React from "react";
import BookDetail from "./pages/bookDetailPage";
import MainPage from "./pages/mainPage.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function Router() {
	return (
		<BrowserRouter>
			<h1 style={{ backgroundColor: "cyan", textAlign: "center" }}>Navbar</h1>
			<Routes>
				<Route path="/detail/:id" element={<BookDetail />} />
				<Route path="/" element={<MainPage />} />
			</Routes>
			<h1 style={{ backgroundColor: "cyan", textAlign: "center" }}>Footer</h1>
		</BrowserRouter>
	);
}

export default Router;
