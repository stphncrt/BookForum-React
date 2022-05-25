import React from "react";
import styled from "styled-components";
import useFetch from "../hooks/UseFetch";

function Modal({ open, author, closeModal }) {
	const API_KEY = process.env.REACT_APP_API_KEY;
	const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&key=${API_KEY}`;
	const { data: books } = useFetch(url);

	console.log(books);
	if (open) {
		return (
			<StyledModal>
				<div class="flexRow">
					<h4>Other Books of the Author</h4>
					<h4 className="close" onClick={closeModal}>
						X
					</h4>
				</div>
				{books.map((book, index) => {
					if (book?.volumeInfo?.imageLinks?.smallThumbnail) {
						return (
							<StyledWrapper key={index}>
								<img
									alt={book?.volumeInfo?.author}
									src={book?.volumeInfo?.imageLinks?.smallThumbnail}
								/>
								<h5>{book.volumeInfo.title}</h5>
							</StyledWrapper>
						);
					}
				})}
			</StyledModal>
		);
	} else return null;
}

export default Modal;

export const StyledModal = styled.div`
	position: fixed;
	width: 70%;
	height: 70%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #fff7e9;
	z-index: 1000;
	overflow: hidden;
	overflow-y: scroll;
	.flexRow {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.close {
		margin: 0.4rem;
		position: absolute;
		right: 1rem;
		:hover {
			transform: scale(1.2);
		}
	}
`;
export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 3rem;
	padding: 1rem;
	margin: 1rem;
	img {
		width: 5rem;
		height: 5rem;
	}
`;
