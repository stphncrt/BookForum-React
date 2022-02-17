import DetailedBookCard from "../components/BookDetail/detailedBookCard.js";
import "./page.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function BookDetail() {
	const [book, setBook] = useState([]);
	const { id } = useParams();
	const url = `www.googleapis.com/books/v1/volumes/${id}`;
	async function fetchAPI() {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Fetch API failed");
			}
			// const book = await response.json();
			console.log(response);
			setBook(response);
		} catch (err) {
			console.log(err.message);
		}
	}
	// fetchAPI();
	return (
		<div className="detailPage">
			<DetailedBookCard title={book.title} image={book.image} description={book.description} />)
		</div>
	);
}

export default BookDetail;
