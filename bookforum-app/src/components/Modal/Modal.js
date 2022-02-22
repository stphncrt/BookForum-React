import React, { useState, useEffect } from "react";
import styled from "styled-components";
const API_KEY = process.env.REACT_APP_API_KEY;

function Modal({ author, open }) {
	const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&key=${API_KEY}`;
	const [books, setBooks] = useState([]);

	async function fetchAPI() {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Fetch API failed");
			}
			const modalItems = await response.json();
			console.log(modalItems.items);
			setBooks(modalItems.items);
		} catch (err) {
			console.log(err.message);
		}
	}
	useEffect(() => {
		fetchAPI();
	}, []);

	if (open) {
		return (
			<StyledModal>
				{books.map((book) => {
					return (
						<StyledWrapper>
							<img alt={book.volumeInfo.title} src={book?.volumeInfo?.imageLinks?.smallThumbnail} />
							<h5>{book.volumeInfo.title}</h5>
						</StyledWrapper>
					);
				})}
			</StyledModal>
		);
	} else return null;
}

export default Modal;

export const StyledModal = styled.div`
	position: fixed;
	width: 60%;
	height: 60%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #fff;
	zindex: 1000;
`;
export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	padding: 1rem;
	img {
		width: 3rem;
		height: 3rem;
	}
`;
