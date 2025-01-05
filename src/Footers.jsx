import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	background-color: #363636;
	color: white;

`

const StyledLanguage = styled.div`
	display: flex;
	flex-direction: row;
	gap: 30px;
	align-items: center;
	justify-content: left;
	margin-left: 30%;
	font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

	@media (max-width: 430px) {
		
		gap: 10px;
		margin-left: 5%;
		/* background-color: red; */
	}
	@media (max-width: 380px) {
		
		gap: 7px;
		margin-left: 1%;
		/* background-color: red; */
	}
`;
const StyledBig = styled.div`
	display: flex;
	flex-direction: row;
	gap: 30px;
	margin-left: 20%;
	@media(max-width: 840px){
		margin-left: 9%;
		gap: 25px;
		display: flex;
		flex-wrap: wrap;
	}
	@media(max-width: 430px){
		margin-left: 9%;
		gap: 20px;
		display: flex;
		flex-wrap: wrap;
	}
	
`;
export default function Footers() {
	return (
		<StyledDiv>
			<hr />
			<StyledLanguage>
				<span>English</span>
				<span>Deutsh</span>
				<span>Italino</span>
				<span>Francais</span>
				<span>Espanol</span>
				<span>日本語</span>
			</StyledLanguage>
			<hr />
			<StyledBig>
				<div className="Quick Links">
					<h4 className="Quick-links">Quick Links</h4>
					<hr />
					<br />
					<h6 className="h6">Home</h6>
					<h6 className="h6">BMW in your country</h6>
					<h6 className="h6">BMW Group Careers</h6>
					<h6 className="h6">EU Detergent Regulation</h6>
					<h6 className="h6">REACH Regulation</h6>
					<h6 className="h6">Compatibility Check</h6>
					<h6 className="h6">Software Update</h6>
					<h6 className="h6">Accessories Update</h6>
					<h6 className="h6">Connected Test Vehicle</h6>
					<h6 className="h6">Services Page Charging Product</h6>
					<h6 className="h6">Cooperation Test Car</h6>
					<h6 className="h6">EU Battery Regulation</h6>
				</div>
				<div className="More-about">
					<h4 className="MoreBmw">More BMW Website</h4>
					<hr />

					<br />
					<h6 className="h6">BMW M</h6>
					<h6 className="h6">BMW M Motorspot</h6>
					<h6 className="h6">BMW Golfsport</h6>
					<h6 className="h6">BMW M Driving Experience</h6>
					<h6 className="h6">BMW Walt</h6>
					<h6 className="h6">BMW Group Classic</h6>
					<h6 className="h6">BMW Corporate/Direct Sale</h6>
					<h6 className="h6">BMW Group</h6>
					<h6 className="h6">BMW Group Culture</h6>
					<h6 className="h6">BMW ConnectedDrive Upgrade</h6>
				</div>
				<div className="BMW-com">
					<h4 className="BMW">BMW.com</h4>
					<hr />

					<h6 className="h6">About BMW.com</h6>
					<h6 className="h6">Contact</h6>
					<h6 className="h6">Cookies</h6>
					<h6 className="h6">Imprint</h6>
					<h6 className="h6">Legal Notice/ Data protection</h6>
				</div>
				<div className="Visit-us">
					<h4 className="visit-us">Visit us on</h4>
					<hr />
					<h6 className="h6">Facebook</h6>
					<h6 className="h6">X</h6>
					<h6 className="h6">Instagram</h6>
					<h6 className="h6">YouTube</h6>
				</div>

			</StyledBig>
				<div className="copyRight">
        <h3 className="cr"> &copy; BMW AG 2024</h3>
        </div>
		</StyledDiv>
	);
}
