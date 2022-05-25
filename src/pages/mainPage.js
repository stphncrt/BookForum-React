import React, { useState } from "react";
import Content from "../components/Content";
import ReadingImg from "../components/ReadingImg";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/UseFetch";

function MainPage() {
	const API_KEY = process.env.REACT_APP_API_KEY;
	const [searchText, setSearchText] = useState("");
	const url = `https://www.googleapis.com/books/v1/volumes?q=${
		searchText ? searchText : "brain"
	}:keyes&key=${API_KEY}&maxResult=40`;
	const { data: books } = useFetch(url);

	return (
		<div>
			<ReadingImg />
			<SearchBar setSearchText={setSearchText} />
			<Content />
			<BookList books={books} />
		</div>
	);
}

export default MainPage;
