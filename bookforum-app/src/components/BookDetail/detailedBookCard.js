import React from "react";
import "./detailedBookCard.css";

function DetailedBookCard({
	title,
	image,
	description,
	author,
	category,
	pageCount,
	publishedDate,
	isbn,
}) {
	return (
		<div className="cardWrapper">
			<div className="infoWrapper">
				<img className="cardImage" src={image} alt={title} />
				<h3>{author}</h3>
				<a href=""> See other books of the author </a>
			</div>
			<div className="infoWrapper">
				<h3> {title} </h3>
				<p> {description} </p>
				<p class="smallCase">
					Category: {category}, ISBN: {isbn} <br /> Publish Date: {publishedDate}, Page Count:{" "}
					{pageCount}
				</p>
			</div>
		</div>
	);
}

export default DetailedBookCard;
