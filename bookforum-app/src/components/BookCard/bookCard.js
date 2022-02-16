import React from "react";
import { StyledCardWrapper, StyledImg } from "./bookCard.style.js";
import { useNavigate } from "react-router-dom";

const BookCard = (props) => {
	const navigate = useNavigate();
	return (
		<StyledCardWrapper
			onClick={() => {
				navigate("/detail");
			}}>
			<h3> {props.title} </h3>
			<StyledImg src={props.image} alt={props.title}></StyledImg>
			<h4> {props.author} </h4>
		</StyledCardWrapper>
	);
};

export default BookCard;
