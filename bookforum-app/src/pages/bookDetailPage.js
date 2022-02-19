import DetailedBookCard from "../components/BookDetail/detailedBookCard.js";
import "./page.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const API_KEY = "AIzaSyC7g22ZagHV-J4LfBTyi3TsNqS4TAl1LB8";

function BookDetail() {
	const [book, setBook] = useState({});
	const { id } = useParams();
	console.log(id);
	const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`;
	async function fetchAPI() {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Fetch API failed");
			}
			const bookData = await response.json();
			console.log(bookData);
			setBook(Object.assign(book, bookData));
			console.log(book);
		} catch (err) {
			console.log(err.message);
		}
	}
	useEffect(() => {
		fetchAPI();
	}, []);
	console.log(book);
	return (
		<div className="detailPage">
			<h3> detailed book </h3>
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
