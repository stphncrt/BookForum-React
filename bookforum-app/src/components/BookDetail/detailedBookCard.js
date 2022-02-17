import React from "react";
import { StyledDetailsWrapper, StyledImage, StyledText } from "./detailedBookCard.style.js";

function DetailedBookCard(props) {
	return (
		<StyledDetailsWrapper>
			<h3> {props.title} </h3>
			<StyledImage src={props.image} alt={props.title} />
			<StyledText> {props.description} </StyledText>
		</StyledDetailsWrapper>
	);
}

export default DetailedBookCard;
