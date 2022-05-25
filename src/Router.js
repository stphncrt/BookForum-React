import React from "react";
import BookDetail from "./pages/BookDetailPage";
import { FavoritesProvider } from "./context/FavoritesContext";
import MainPage from "./pages/MainPage.js";
import FavoritePage from "./pages/FavoritePage.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";

function Router() {
	return (
		<FavoritesProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/detail/:id" element={<BookDetail />} />
					<Route path="/" element={<MainPage />} />
					<Route path="/favorites" element={<FavoritePage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</FavoritesProvider>
	);
}

export default Router;
