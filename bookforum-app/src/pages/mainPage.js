import React, { useState, useEffect } from "react";
import "./page.css";
import Content from "../components/Content/Content";
import ReadingImg from "../components/ReadingImg/ReadingImg";
import BookList from "../components/BookList/bookList";
import SearchBar from "../components/SearchBar/SearchBar";

function MainPage() {
	const API_KEY = "AIzaSyC7g22ZagHV-J4LfBTyi3TsNqS4TAl1LB8";
	const [searchText, setSearchText] = useState("");
	const url = `https://www.googleapis.com/books/v1/volumes?q=${
		!searchText ? "brain" : searchText
	}:keyes&key=${API_KEY}&maxResult=40`;
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => setBooks(json?.items))
			.catch((err) => new Error(err));
	}, [url]);

	return (
		<div className="mainPage">
			<ReadingImg />
			<SearchBar setSearchText={setSearchText} />
			<Content />
			<BookList books={books} />
		</div>
	);
}

export default MainPage;
