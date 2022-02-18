import React from "react";
import BookDetail from "./pages/bookDetailPage";
import MainPage from "./pages/mainPage.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import Navbar from "./components/Navbar/navbar.js";

function Router() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/detail/:id" element={<BookDetail />} />
				<Route path="/" element={<MainPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default Router;
