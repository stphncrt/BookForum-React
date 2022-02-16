import React from "react";
import "./page.css";
import { library } from "../data.js";
import BookCard from "../components/BookCard/bookCard.js";
import { StyledBookWrapper } from "../components/BookContainer/booksContainer";

function MainPage() {
	return (
		<>
			<h1 style={{ backgroundColor: "cyan", textAlign: "center" }}>Navbar</h1>
			<div className="mainPage">
				<h2 style={{ width: "40%" }}>Classes of Books</h2>
				<StyledBookWrapper>
					{library.map((book) => {
						return <BookCard title={book.title} image={book.image} author={book.author} />;
					})}
				</StyledBookWrapper>
			</div>
			<h1 style={{ backgroundColor: "cyan", textAlign: "center" }}>Footer</h1>
		</>
	);
}

export default MainPage;
