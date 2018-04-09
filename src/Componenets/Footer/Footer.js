import React from "react";
import {
	Container,
	Grid,
	List,
	Image,
	Segment,
	Divider,
	Icon
} from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import logo from "../../assets/images/logo.png";
import AppStore from "../../assets/images/apple-store.png";
import GooglePlay from "../../assets/images/google-play.png";

const Footer = () => (
	<Segment
		vertical
		style={{
			padding: "2em 0em",
			marginTop: "3em",
			marginBottom: "0",
			backgroundColor: "#282C35"
		}}
	>
		<Container>
			<Grid doubling stackable columns={2}>
				<Grid.Row columns={2}>
					<Grid.Column textAlign="left">
						<Image
							as="a"
							href=""
							src={logo}
							style={{
								width: "50px",
								height: "auto",
								marginTop: "-10px"
							}}
						/>
					</Grid.Column>
					<Grid.Column textAlign="right">
						<List horizontal link inverted relaxed>
							<List.Item as="a" target="_blank" href="">
								<Image
									centered
									src={AppStore}
									style={{ width: "120px", height: "auto" }}
								/>
							</List.Item>

							<List.Item as="a" target="_blank" href="">
								<Image
									centered
									src={GooglePlay}
									style={{ width: "120px", height: "auto" }}
								/>
							</List.Item>
						</List>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Divider />
			<Grid doubling floated="left" centered inverted stackable>
				<Grid.Row columns="equal">
					<Grid.Column floated="left">
						<List horizontal link inverted relaxed>
							<List.Item as="a">Terms of Service </List.Item>
							<List.Item as="a">Privacy Policy</List.Item>

							<List.Item as="a">FAQ's</List.Item>
						</List>
					</Grid.Column>
					<Grid.Column floated="right" textAlign="right">
						<List horizontal link inverted>
							<List.Item as="a" target="_blank">
								<Icon inverted circular name="facebook" />
							</List.Item>

							<List.Item as="a" target="_blank">
								<Icon inverted circular name="instagram" />
							</List.Item>

							<List.Item as="a" target="_blank">
								<Icon inverted circular name="twitter" />
							</List.Item>
						</List>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Divider />
			<Grid centered columns={2}>
				<Grid.Column textAlign="center" style={{ color: "white" }}>
					©2018. All Rights Reserved.
				</Grid.Column>
			</Grid>
		</Container>
	</Segment>
);

export default Footer;
