import React from "react";
import styled from "styled-components";

function Footer() {
	return (
		<div>
			<StyledWrapper>
				<StyledLinkContainer>
					<h3>COMPANY</h3>
					<StyledLink href="" className="link">
						About us
					</StyledLink>
					<StyledLink href="" className="link">
						Careers
					</StyledLink>
					<StyledLink href="" className="link">
						Terms
					</StyledLink>
					<StyledLink href="" className="link">
						Privacy
					</StyledLink>
					<StyledLink href="" className="link">
						Interest Based Ads
					</StyledLink>
					<StyledLink href="" className="link">
						Ad Preferences
					</StyledLink>
					<StyledLink href="" className="link">
						Help
					</StyledLink>
				</StyledLinkContainer>
				<StyledLinkContainer>
					<h3>WORK WITH US</h3>
					<StyledLink href="" className="link">
						Authors
					</StyledLink>
					<StyledLink href="" className="link">
						Advertise
					</StyledLink>
					<StyledLink href="" className="link">
						Authors & ads blog
					</StyledLink>
					<StyledLink href="" className="link">
						API
					</StyledLink>
				</StyledLinkContainer>
				<StyledLinkContainer>
					<h3>CONNECT</h3>
					<StyledLink href="">Facebook</StyledLink>
					<StyledLink href="">Twitter</StyledLink>
					<StyledLink href="">Youtube</StyledLink>
					<StyledLink href=""></StyledLink>
				</StyledLinkContainer>
			</StyledWrapper>
		</div>
	);
}

export default Footer;

export const StyledLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 5rem;
	padding: 1rem 6rem;
	background-color: #f9f8f4;
	width: 100%;
`;
export const StyledLink = styled.a`
	text-decoration: none;
	color: #382b86;
	&:hover {
		text-decoration: underline;
	}
`;
