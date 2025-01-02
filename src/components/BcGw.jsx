import styled from "styled-components";

const StyledGameChanger = styled.div`
	background-color: #0b5e0bff;
	width: 49.5%;
	height: 100vh;
	padding-top: 25%;
	padding-left: 5%;
	@media (max-width: 840px) {
		height: 60vh;
	}
	@media (max-width: 430px) {
		width: 100%;
		padding-left: 10%;
		height: 50vh;
	}
	@media (max-width: 414px) {
		padding: 8%;
	}
`;
const StyledWallpaper = styled.div`
	background: url("\graycar.webp");

	width: 50.5%;
	height: 100vh;
	padding-top: 35%;
	padding-left: 5%;
	transition: transform 0.5s ease, filter 0.5s ease;
	overflow: hidden;
	position: relative;
	@media (max-width: 840px) {
		padding-top: 45%;
		padding-left: 7%;
		object-fit: fill;
		height: 60vh;
	}
	@media (max-width: 430px) {
		width: 100%;
		height: 50vh;
	}
`;
const StyledSection = styled.section`
	display: flex;
	gap: 0.1%;
	flex: 1;
	background-color: #b3b1b1;
	@media (max-width: 840px) {
		height: 60vh;
	}
	@media (max-width: 430px) {
		display: flex;
		flex-direction: column;
	}
`;
const StyledMicroDiv = styled.div`
	display: flex;
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
export default function BcGw(props) {
	return (
		<StyledSection>
			<StyledGameChanger className="sgc">
				<StyledMicroDiv>
					<img src="" alt="🎙" />
					<h3 className="Gch3">Game Changer</h3>
				</StyledMicroDiv>
				<h2 className="fh2">
					An audio series about those <br /> who change the world around them
				</h2>
				<StyledButton className="btn1">{props.buttonText}</StyledButton>
			</StyledGameChanger>
			<StyledWallpaper className="sw">
				<h2 className="fh2" id="fh2">
					BMW wallpaper
				</h2>
				<StyledButton className="bt2">{props.buttonText}</StyledButton>
			</StyledWallpaper>
		</StyledSection>
	);
}
