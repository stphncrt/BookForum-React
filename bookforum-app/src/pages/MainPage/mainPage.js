import React from "react";
import { library } from "../../data.js";
import BookCard from "../../components/BookCard/bookCard.js";
import { StyledBookWrapper } from "./mainPage.style";

function MainPage() {
	return (
		<StyledBookWrapper>
			{library.map((book) => {
				return <BookCard title={book.title} image={book.image} author={book.author} />;
			})}
		</StyledBookWrapper>
	);
}

export default MainPage;
