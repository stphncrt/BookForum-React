import React from "react";
import { StyledCardWrapper, StyledImg, StyledText } from "./bookCard.style.js";
import { useNavigate } from "react-router-dom";

const BookCard = (props) => {
	const navigate = useNavigate();
	return (
		<StyledCardWrapper
			onClick={() => {
				navigate(`/detail/${props.id}`);
			}}>
			<StyledText> {props.title} </StyledText>
			<StyledImg src={props.image} alt={props.title}></StyledImg>
			<StyledText> {props.author} </StyledText>
		</StyledCardWrapper>
	);
};

export default BookCard;
