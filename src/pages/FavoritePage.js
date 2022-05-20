import React, { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import ClipLoader from "react-spinners/ClipLoader";
import BookCard from "../components/BookCard";
import { css } from "@emotion/react";
import styled from "styled-components";

function FavoritePage() {
	const [books, setBooks] = useState([]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const { favoritedBookIds } = useContext(FavoritesContext);
	const API_KEY = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await Promise.all(
					favoritedBookIds.map(async (id) => {
						const response = await fetch(`https://www.googleapis.com/books/v1/volumes/
						${id}?key=${API_KEY}`);
						const result = await response.json();
						console.log(result);
						return result;
					}),
				);
				setBooks(data);
				console.log(data);
			} catch (error) {
				console.log(error);
				setIsError(true);
			}
			setIsLoading(false);
		}

		fetchData();
	}, [favoritedBookIds]);
	return (
		<StyledWrapper>
			<h2 id="title">Favorited Books</h2>
			<div className="main">
				<ul className="bookContainer">
					{isError ? (
						<span>BAD REQUEST!</span>
					) : isLoading ? (
						<ClipLoader css={override} size={100} />
					) : books.length > 0 ? (
						books.map((book, index) => (
							<BookCard
								key={index}
								id={book?.id}
								title={book?.volumeInfo?.title}
								image={book?.volumeInfo?.imageLinks?.smallThumbnail}
							/>
						))
					) : (
						<div>No favorites!</div>
					)}
				</ul>
			</div>
		</StyledWrapper>
	);
}
export default FavoritePage;
export const StyledWrapper = styled.div`
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	#title {
		text-align: center;
		color: #6a5c4c;
	}
`;
export const override = css`
	display: block;
	margin: 0 auto;
	margin-top: 10rem;
`;
