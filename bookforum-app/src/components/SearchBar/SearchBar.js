import React, { useState } from "react";
import styled from "styled-components";

function SearchBar() {
	const [book, setBook] = useState("");
	const 

	function handleSearch() {}
	function handleChange(event) {
		const search = event.target.value;
	}
	return (
		<StyledContainer>
			<h4> Join the challenge, find your book. </h4>{" "}
			<StyledWrapper>
				<StyledInput type="text" onChange={handleChange} placeholder="Search your book..." />
				<StyledButton type="submit" onClick={handleSearch}>
					{" "}
					Search{" "}
				</StyledButton>{" "}
			</StyledWrapper>{" "}
		</StyledContainer>
	);
}

export default SearchBar;

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	margin: -5rem auto 5rem;
`;
export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
`;

export const StyledInput = styled.input`
	border-radius: 5px;
	border: 0.2px solid #fff7e9;
	width: 15rem;
	:focus {
		outline: none;
	}
`;
export const StyledButton = styled.button`
	border-radius: 5px;
	border-color: #fff7e9;
	background-color: #f4f2e9;
	padding: 0.2rem 0.5rem;
	&:hover {
		background-color: #8f8e86;
		color: #fff;
		font-weight: bold;
	}
`;
