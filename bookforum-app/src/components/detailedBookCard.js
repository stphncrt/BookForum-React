import React from "react";
import styled from "styled-components";

function DetailedBookCard({
	title,
	image,
	description,
	author,
	category,
	pageCount,
	publishedDate,
	isbn,
	setIsOpen,
}) {
	return (
		<StyledContainer>
			<div className="infoWrapper">
				<img className="cardImage" src={image} alt={title} />
				<h3>{author}</h3>
				<h3
					class="clickable"
					onClick={() => {
						setIsOpen(true);
					}}>
					See other books of the author
				</h3>
			</div>
			<div className="infoWrapper">
				<h3> {title} </h3>
				<p> {description} </p>
				<p class="smallCase">
					Category: {category}, ISBN: {isbn} <br /> Publish Date: {publishedDate}, Page Count:{" "}
					{pageCount}
				</p>
			</div>
		</StyledContainer>
	);
}

export default DetailedBookCard;

export const StyledContainer = styled.div`
	margin: 1rem;
	padding: 1rem;
	width: 65%;
	height: 80%;
	border: 1px solid grey;
	box-shadow: 15px 5px 50px #fff;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 3rem;
	backdrop-filter: blur(15px);

	.cardImage {
		width: 15rem;
	}

	.infoWrapper {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		color: #420000;
	}

	.infoWrapper p {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 15;
		-webkit-box-orient: vertical;
	}

	.smallCase {
		font-size: 12px;
	}

	.clickable {
		font-size: 16px;
	}

	.clickable :hover {
		background-color: #8f8e86;
		color: #fff;
		font-weight: bold;
	}
`;
