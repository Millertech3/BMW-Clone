import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
	display: flex;
	flex-direction: row;
	margin-top: 10px;
	justify-content: center;
	align-items: center;
`;
const StyledIcon = styled.div`
	margin: 20px;
`;
const StyledH3 = styled.h3`
	color: white;
	text-align: end;
	margin-top: -10px;
	font-weight: 600;
	font-size: medium;
`;

const StyledH4 = styled.h4`
	font-size: 3.53vh;
	color: white;
`;
const StyledH1 = styled.h1`
	font-size: 4.4875vw;
	line-height: 4.625vw;
	color: white;
	max-width: 850px;
	@media (max-width: 430px) {
		/* font-size: 12px; */
		font-weight: 600;
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
const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 85px;
	background-attachment: fixed;
	background: url("src/assets/wpimg/heroimg.webp");
	background-repeat: no-repeat;
	background-size: 100%;
	height: 70vh;
	padding-bottom: 100px;
	@media (max-width: 375px) {
		font-size: smaller;
		width: fit-content;
	}
	@media (max-width: 430px) {
		height: 60vh;
	}
`;
const Header = (props) => {
	return (
		<StyledDiv className="headerimg">
			<StyledNav>
					<nav
					id="navbar"
					className="navbar navbar-expand-lg navbar-dark bg-dark-800"
				>
					<a className="navbar-brand" href="#">
						BMW
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home <span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Circular World
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Digital Journey
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									Electric Future
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Freude
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Model
								</a>
							</li>
						</ul>

						<div className="sheer">
							<hr />
							<StyledH3>Sheer Driven Pleasure</StyledH3>
						</div>
					</div>
				</nav>

				<StyledIcon>
					<div className="logo">
						<img src="src\assets\bmw-logo.svg" alt="BMW Logo" />
					</div>
				</StyledIcon>
			</StyledNav>

			<section className="sectionNav">
				<StyledH4>Hydrogen</StyledH4>
				<StyledH1>The BMW journey to the mobility of the future</StyledH1>
				<StyledButton>{props.buttonText}</StyledButton>
			</section>
		</StyledDiv>
	);
};

export default Header;
