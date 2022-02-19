import React from "react";
import { StyledCardWrapper, StyledImg, StyledText, StyledTitle } from "./bookCard.style.js";
import { useNavigate } from "react-router-dom";

const BookCard = (props) => {
	const navigate = useNavigate();
	return (
		<StyledCardWrapper
			onClick={() => {
				navigate(`/detail/${props.id}`);
			}}>
			<StyledTitle> {props.title} </StyledTitle>
			<StyledImg src={props.image} alt={props.title}></StyledImg>
			<StyledText> {props.author} </StyledText>
		</StyledCardWrapper>
	);
};

export default BookCard;
