import styled from "styled-components";

const StyledDiv = styled.div`
	background-color: whitesmoke;
	display: flex;
	flex-direction: column;
	padding-top: 60px;
	@media(max-width: 414px){
	padding-top: 170px;
}
`;
const StyledFirst = styled.div`
	display: flex;
	flex-direction: row;
	padding: 18%;
	padding-right: 60px;
	height: 120vh;

	@media (max-width: 840px) {
		height: 60vh;
	}
	@media(max-width: 430px){
		display: flex;
		flex-direction: column-reverse;
		padding-top: 20px;
		/* background-color: #e2d9d9; //coming back to this  */
	}

`;
const StyledCarousel = styled.div`
margin-top: 90px;
`;
const StyledLmNews = styled.div`
	padding-right: 10%;
	padding-top: 15%;
	
`;
const StyledSecond = styled.div`
display: flex;
flex-direction: row;
padding: 0 18%;
height: 100vh;
@media(max-width: 840px) {
padding: 0 10%;
height: 40vh;	
}
@media(max-width: 430px){
	display: flex;
	flex-direction: column-reverse;
	background-color: #b4afaf;
	
}
@media(max-width:414px){
padding: 10% ;
}

`;
const StyledBMWExp = styled.div`
		padding-left: 10%;
		padding-top: 15%;
	
`
export default function Details() {
	return (
		<StyledDiv>
			<StyledFirst>
				<StyledLmNews>
					<h3 className="detailh3">
						Learn Everything about <br /> BMW here
					</h3>
					<h4 className="detailh4">
						<img src="" alt=">" /> BMW NEWS
					</h4>
				</StyledLmNews>
				<StyledCarousel>
					<div id="carouselExample" className="carousel slide">
						<div className="carousel-inner">
							<div className="carousel-item active" >
								<img
									src="src/assets/detailImg/n-01-media-hd.webp"
									className="d-block w-100"
									alt="..."
									id="img1"
								/>
							</div>
							<div className="carousel-item">
								<img
									src="src/assets/detailImg/n-02-media-hd.webp"
									className="d-block w-100"
									alt="..."
									id="img3"
								/>
							</div>
							<div className="carousel-item">
								<img
									src="src/assets/detailImg/n-03-media-hd.jpg"
									className="d-block w-100"
									alt="..."
									id="img3"
								/>
							</div>
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselExample"
							data-bs-slide="prev"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselExample"
							data-bs-slide="next"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</StyledCarousel>
			</StyledFirst>
			
			<StyledSecond>
			
				<video 
				className="vid"
					src="src/assets/videoAsset/videoBMW.mp4"
					width={640}
					height={360}
					autoPlay
					loop
					muted
				></video>
				
				<StyledBMWExp>
					
					<h3 className="bmexp">
						Become a BMW Expert
					</h3>
					<h4 className="bmexp">
						<img src="" alt=">" /> BMW Explained
					</h4>
				</StyledBMWExp>
			</StyledSecond>
		</StyledDiv>
	);
}
