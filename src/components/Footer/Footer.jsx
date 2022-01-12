import React from "react"
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';


export const Box = styled.div`
	@media (max-width: 768px) {
		padding: 20px;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 40px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(195px, .5fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(195px, .5fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 12px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: #fff;
margin-bottom: 30px;
font-weight: bold;
`;



const Footer = () => {
return (
	<Box style={{
		background: "#01062C",
		width: "100%",
		}}>
	
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">How it Works</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
			<FooterLink href="#">Investors</FooterLink>
            <FooterLink href="#">Terms of Services</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Contact</FooterLink>
			<FooterLink href="#">Support</FooterLink>
			<FooterLink href="#">Destinations</FooterLink>
			<FooterLink href="#">Sponsorships</FooterLink>
		</Column>
		<Column>
			<Heading>Videos</Heading>
			<FooterLink href="#">Submit Video</FooterLink>
			<FooterLink href="#">Ambassadors</FooterLink>
			<FooterLink href="#">Agency</FooterLink>
			<FooterLink href="#">Influencer</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
            <FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
            <FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
		<div style = {{
			display: "flex",
			justifyContent:"space-around",
			
		}}>
            <div>
				<Heading>PROJECT</Heading>
			</div> 
			<div>
				<h4>project @ 2022 all rights</h4>
			</div>
			<div>
		    <SocialIcon url="https://linkedin.com" style={{ height: 35, width: 35, margin:"10px" }}  />
			<SocialIcon url="https://youtube.com" style={{ height: 35, width: 35, margin:"10px" }} />
			<SocialIcon url="https://facebook.com" style={{ height: 35, width: 35, margin:"10px" }} />
			<SocialIcon url="https://instagram.com" style={{ height: 35, width: 35, margin:"10px" }} />
			<SocialIcon url="https://twitter.com" style={{ height: 35, width: 35, margin:"10px" }} />
			</div>
			
		</div>
	</Container>
    
	</Box>
);
};
export default Footer;
