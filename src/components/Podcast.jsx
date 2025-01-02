import React from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
	background-color: #363636;
`;
const StyledPodcastDetails = styled.div`
	width: 750px;
	padding: 40px 75px;
	@media(max-width: 430px) {
		padding: 30px 50px;
	}
	@media(max-width: 380px){
		padding: 30px 35px;
	}
`;
const StyledButton = styled.button`
	border-radius: 0;
	border: 2px white solid;
	width: 170px;
	height: 50px;
	color: white;
	background-color: transparent;
	font-size: medium;
`;
const StyledCarousel = styled.div``;

export default function Podcast() {
	return (
		<StyledDiv>
			<StyledPodcastDetails>
				<h1 className="headingPodcast">THE BMW PODCAST CHANGING LANES</h1>
				<p className="bmwpodcasttext">
					Changing Lanes is the official podcast from BMW. In these audio
					series, we take you with us on new journeys through the BMW universe.
					Find out more about sustainability, innovation, technology, mobility
					and the latest trends. You can find and subscribe to Changing Lanes on
					all major podcast platforms, so tune in!
				</p>
				<StyledButton>Listen now</StyledButton>
			</StyledPodcastDetails>
			<StyledCarousel></StyledCarousel>
		</StyledDiv>
	);
}
