import Header from "./components/Header";
import BcGw from "./components/BcGw";
import Details from "./components/Details";
import Podcast from "./components/Podcast";
import Footers from "./Footers";
import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css'

import ABMW from "./components/ABMW";
const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3px;
	background-color: white;
	@media (width: 375px) {
		width: fit-content;
		height: 100vh;
		padding-top: 10px;
	}
`;
 
export default function App() {
	 
	return (
		<StyledDiv>
			<Header buttonText="Read More" />
			<BcGw buttonText="Read More" />
			<Details />
			<Podcast/>
			<ABMW />
			<Footers/>
		</StyledDiv>
	);
}

