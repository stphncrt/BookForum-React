import BookCard from "./bookCard.js";
import { StyledBookWrapper } from "./booksContainer";

const BookList = ({ books }) => {
	return (
		<StyledBookWrapper>
			{books?.map((book, index) =>
				book?.volumeInfo?.imageLinks?.thumbnail && book?.volumeInfo?.authors[0] !== undefined ? (
					<BookCard
						key={index}
						id={book?.id}
						title={book?.volumeInfo?.title}
						image={book?.volumeInfo?.imageLinks?.thumbnail}
						author={book?.volumeInfo?.authors[0]}
					/>
				) : null,
			)}
		</StyledBookWrapper>
	);
};
export default BookList;
