import styled from "styled-components";
export const StyledCardWrapper = styled.div `
	margin: 10px;
	width: 15%;
	height: 15rem;
	border-radius: 0.5rem;
	box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	transition: 0.5s;
	background-color: #F4F2E9;
	opacity: 0.8;

	&:hover {
		transform: scale(1.02);
		cursor: pointer;
	}
`;
export const StyledImg = styled.img `
	width: 90%;
	height: 60%;
	margin: 5px;
	margin-bottom: 0px;
`;


export const StyledTitle = styled.h5 `
overflow: hidden;
text-overflow: ellipsis;
padding: 0.2rem;
display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
line
`
export const StyledText = styled.h6 `
overflow: hidden;
text-overflow: ellipsis;
padding: 0.2rem;
`