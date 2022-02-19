import DetailedBookCard from "../components/BookDetail/detailedBookCard.js";
import "./page.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const API_KEY = "AIzaSyC7g22ZagHV-J4LfBTyi3TsNqS4TAl1LB8";

function BookDetail() {
	const { id } = useParams();
	console.log(id);
	const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`;
	const [book, setBook] = useState({});

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
	// useEffect(() => {
	// 	fetch(url)
	// 		.then((response) => {
	// 			response.json();
	// 		})
	// 		.then((json) => {
	// 			// setBook(Object.assign(book, json));
	// 			console.log(json);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err.message);
	// 		});
	// }, [url]);
	// console.log(book);
	fetchAPI();
	console.log(book);
	return (
		<div className="detailPage">
			<DetailedBookCard
				title={book?.volumeInfo?.title}
				image={book?.volumeInfo?.imageLinks?.thumbnail}
				description={book?.description}
			/>
		</div>
	);
}

export default BookDetail;
