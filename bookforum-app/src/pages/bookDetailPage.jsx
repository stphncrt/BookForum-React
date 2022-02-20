import DetailedBookCard from "../components/BookDetail/detailedBookCard.js";
import "./page.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const API_KEY = process.env.REACT_APP_API_KEY;

function BookDetail() {
	const { id } = useParams();
	const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`;
	const [book, setBook] = useState(null);

	async function fetchAPI() {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Fetch API failed");
			}
			const bookData = await response.json();
			setBook(bookData);
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
			<DetailedBookCard
				title={book?.volumeInfo?.title}
				author={book?.volumeInfo?.authors[0]}
				image={book?.volumeInfo?.imageLinks?.small}
				description={book?.volumeInfo?.description}
				category={book?.volumeInfo?.categories[0]}
				publishedDate={book?.volumeInfo?.publishedDate}
				pageCount={book?.volumeInfo?.pageCount}
				isbn={book?.volumeInfo?.industryIdentifiers[1]?.identifier}
			/>
		</div>
	);
}

export default BookDetail;
