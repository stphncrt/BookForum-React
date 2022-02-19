import React, { useState, useEffect, useRef } from "react";
import "./page.css";
import { library } from "../data.js";
import Content from "../components/Content/Content";
import ReadingImg from "../components/ReadingImg/ReadingImg";
import { BookList } from "../components/BookList/bookList";
import { StyledContainer, StyledWrapper, StyledInput, StyledButton } from "./mainPageStyle";

function MainPage() {
	const API_KEY = "AIzaSyC7g22ZagHV-J4LfBTyi3TsNqS4TAl1LB8";
	const [searchText, setSearchText] = useState("");
	const url = `https://www.googleapis.com/books/v1/volumes?q=${
		!searchText ? "react" : searchText
	}:keyes&key=${API_KEY}&maxResult=40`;
	const [books, setBooks] = useState([]);
	const [inputValue, setInputValue] = useState("");

	function handleChange(e) {
		setInputValue(e.target.value);
		console.log(e.target.value);
	}

	function handleSearch(event) {
		event.preventDefault();
		setSearchText(inputValue);
	}

	function handleFocus(e) {
		e.target.value = "";
	}

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => setBooks(json?.items))
			.catch((err) => new Error(err));
	}, [url]);

	return (
		<div className="mainPage">
			<ReadingImg />
			<StyledContainer>
				<h4> Join the challenge, find your book. </h4>
				<StyledWrapper>
					<StyledInput
						onFocus={handleFocus}
						onChange={handleChange}
						type="text"
						placeholder="Search your book..."
					/>
					<StyledButton type="submit" onClick={handleSearch}>
						Search
					</StyledButton>
				</StyledWrapper>
			</StyledContainer>
			{/* <SearchBar /> */}
			<Content />
			<BookList books={books} />
		</div>
	);
}

export default MainPage;
