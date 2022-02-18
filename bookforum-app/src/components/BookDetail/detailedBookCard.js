import React from "react";
import "./detailedBookCard.css";

function DetailedBookCard(props) {
	return (
		<div class="cardWrapper">
			<div class="infoWrapper">
				<img class="cardImage" src={props.image} alt={props.title} />
				<a href="">See other books of the author</a>
				<h3>lorem</h3>
			</div>
			<div class="infoWrapper">
				<h3> {props.title} </h3>
				<p> {props.description} </p>
			</div>
		</div>
	);
}

export default DetailedBookCard;
