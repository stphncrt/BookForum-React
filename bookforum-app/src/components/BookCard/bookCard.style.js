import styled from "styled-components";
export const StyledCardWrapper = styled.div `
	margin: 10px;
	width: 20%;
	height: 25rem;
	border-radius: 0.5rem;
	box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	transition: 0.2s;
	background-color: #d1c7c7;

	&:hover {
		transform: scale(1.02);
	}
`;
export const StyledImg = styled.img `
	width: 90%;
	height: 70%;
	margin: 5px;
	margin-bottom: 0px;
`;