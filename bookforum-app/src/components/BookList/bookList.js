import BookCard from "../BookCard/bookCard.js";
import { StyledBookWrapper } from "../BookContainer/booksContainer";

export const BookList = ({ books }) => {
	return (
		<StyledBookWrapper>
			{books?.map((book, index) => (
				<BookCard
					key={index}
					id={book?.id}
					title={book?.volumeInfo?.title}
					image={book?.volumeInfo?.imageLinks?.thumbnail}
					author={book?.volumeInfo?.authors["0"]}
				/>
			))}
		</StyledBookWrapper>
	);
};
