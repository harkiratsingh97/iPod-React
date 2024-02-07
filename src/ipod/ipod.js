import React from "react";
import Display from "../display/display";
import Wheel from "../wheel/wheel";
import ipodCss from "./ipod.module.css";

//This is the main component where all the states and handler functions are kept

export default class Ipod extends React.Component {
	constructor() {
		super();
		this.state = {
			mainMenu: ["Cover Flow", "Music", "Games", "Settings"],
			musicMenu: ["All Songs", "Artists", "Albums"],
			activeMenu: 0,
			// activeMenuItem: 0,
			display: "All Songs",
		};
	}

	//This function is used to change the item in Menu while rotating
	changeMenuItem = () => {
		if (this.state.display === "mainMenu") {
			let { activeMenu } = this.state;
			if (activeMenu === 3) {
				activeMenu = 0;
			} else {
				activeMenu++;
			}
			this.setState({ activeMenu });
		}
		if (this.state.display === "Music") {
			let { activeMenu } = this.state;
			if (activeMenu === 2) {
				activeMenu = 0;
			} else {
				activeMenu++;
			}
			this.setState({ activeMenu });
		}
	};

	//This function is used to go back to the previous screen when Menu key is pressed
	handleMenuClick = () => {
		if (this.state.mainMenu.find((item) => item === this.state.display)) {
			this.setState({
				display: "mainMenu",
				activeMenu: 0,
			});
		}
		if (this.state.musicMenu.find((item) => item === this.state.display)) {
			this.setState({
				display: "Music",
				activeMenu: 0,
			});
		}
	};

	//This function is used when we click on any meny item using middle button
	chooseItem = () => {
		if (this.state.display === "mainMenu") {
			this.setState((prevState) => ({
				display: prevState.mainMenu[prevState.activeMenu],
				activeMenu: 0,
			}));
		}
		if (this.state.display === "Music") {
			this.setState((prevState) => ({
				display: prevState.musicMenu[prevState.activeMenu],
				activeMenu: 0,
			}));
		}
	};

	render() {
		return (
			<>
				<div className={ipodCss.ipodWrapper}>
					{/*This is the screen where all the content is visible on our ipod */}
					<Display
						display={this.state.display}
						menuItems={
							(this.state.display === "mainMenu" && this.state.mainMenu) ||
							(this.state.display === "Music" && this.state.musicMenu)
						}
						activemenu={this.state.activeMenu}
					/>
					
					{/*This is the button and dial which is used to interact with the iPod */}
					<Wheel
						changeMenuItem={this.changeMenuItem}
						chooseItem={this.chooseItem}
						handleMenuClick={this.handleMenuClick}
					/>
				</div>
			</>
		);
	}
}
