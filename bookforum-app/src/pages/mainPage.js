import React, { useState, useEffect } from "react";
import "./page.css";
import { library } from "../data.js";
import BookCard from "../components/BookCard/bookCard.js";
import { StyledBookWrapper } from "../components/BookContainer/booksContainer";

function MainPage() {
	const API_KEY = "AIzaSyC7g22ZagHV-J4LfBTyi3TsNqS4TAl1LB8";
	const url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${API_KEY}`;
	const [searchText, setSearchText] = useState("");
	const [books, setBooks] = useState([]);

	function handleChange(e) {
		const book = e.target.value;
		setSearchText(book);
	}
	async function fetchAPI() {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Fetch API failed");
			}
			const books = await response.json();
			console.log(books.items);
			setBooks(books.items);
		} catch (err) {
			console.error(err);
		}
	}
	// fetchAPI();
	return (
		<div className="mainPage">
			<h2 style={{ width: "40%" }}>Classes of Books</h2>
			<form>
				<div>
					<input type="text" placeholder="Search your Books" onChange={handleChange} />
					<button type="submit">Search</button>
				</div>
			</form>
			<StyledBookWrapper>
				{books.map((book) => {
					return (
						<BookCard
							key={book.volumeInfo.industryIdentifiers["ISBN_13"]}
							id={book.id}
							title={book.volumeInfo.title}
							image={book.volumeInfo.imageLinks.thumbnail}
							author={book.volumeInfo.authors["0"]}
						/>
					);
				})}
				{/* {library.map((book) => {
					return (
						<BookCard
							key={book.id}
							id={book.id}
							title={book.title}
							image={book.image}
							author={book.author}
						/>
					);
				})} */}
			</StyledBookWrapper>
		</div>
	);
}

export default MainPage;
