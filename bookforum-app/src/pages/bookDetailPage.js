import DetailedBookCard from "../components/BookDetail/detailedBookCard.js";
import "./page.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = "AIzaSyC7g22ZagHV-J4LfBTyi3TsNqS4TAl1LB8";

function BookDetail() {
	const [book, setBook] = useState({});
	const { id } = useParams();
	const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`;
	async function fetchAPI() {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Fetch API failed");
			}
			const bookData = await response.json();
			setBook(Object.assign(book, bookData));
			console.log(book);
		} catch (err) {
			console.log(err.message);
		}
	}
	// fetchAPI();
	console.log(book);
	return (
		<div className="detailPage">
			<DetailedBookCard
				title={book.volumeInfo.title}
				image={book.volumeInfo.imageLinks.thumbnail}
				description={book.description}
			/>
			)
		</div>
	);
}

export default BookDetail;
