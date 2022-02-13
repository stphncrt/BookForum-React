import React from "react";
import { StyledCardWrapper, StyledImg } from "./bookCard.style.js";
import { useHistory } from "react-router-dom";

const BookCard = (props) => {
	const history = useHistory();
	return (
		<StyledCardWrapper onClick={() => history.push(`/detail`)}>
			<h3> {props.title} </h3>
			<StyledImg src={props.image} alt={props.title}></StyledImg>
			<h4> {props.author} </h4>
		</StyledCardWrapper>
	);
};

export default BookCard;
