import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
	return (
		<StyledWrapper>
			<StyledImg
				id="goodReads-img"
				alt="Goodreads: Book reviews, recommendations, and discussion"
				src="https://s.gr-assets.com/assets/home/header_logo-8d96d7078a3d63f9f31d92282fd67cf4.png"></StyledImg>
			<div className="linkContainer">
				<Link to={"/login"}>Login</Link>
				<Link to={"/favorites"}>Favorites</Link>
			</div>
		</StyledWrapper>
	);
}

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: #f4f2e9;
	.linkContainer {
		margin-left: auto;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		margin-right: 1rem;
	}
`;
export const StyledImg = styled.img`
	margin: 1rem 6rem;
`;
