import React from "react";
import "./detailedBookCard.css";

function DetailedBookCard(props) {
	return (
		<div className="cardWrapper">
			<div className="infoWrapper">
				<img className="cardImage" src={props.image} alt={props.title} />
				<a href=""> See other books of the author </a>
				<h3> lorem </h3>
			</div>
			<div className="infoWrapper">
				<h3> {props.title} </h3>
				<p> {props.description} </p>
			</div>
		</div>
	);
}

export default DetailedBookCard;
