import React from "react";
import Display from "../display/display";
import Wheel from "../wheel/wheel";
import ipodCss from "./ipod.module.css";

export default class Ipod extends React.Component {
	constructor() {
		super();
		this.state = {
			items: ["Songs", "Albums", "Artists", "Playlists"],
			activeMenu: 0,
			display: "Menu",
		};
	}

	changeMenuItem = () => {
		if (this.state.display === "Menu") {
			let { activeMenu } = this.state;
			if (activeMenu === 3) {
				activeMenu = 0;
			} else {
				activeMenu++;
			}
			this.setState({ activeMenu });
		}
	};

	chooseItem = (menu) => {
		if (menu === "Menu") {
			this.setState((prevState) => ({
				display: "Menu",
			}));
		} else {
			this.setState((prevState) => ({
				display: prevState.items[prevState.activeMenu],
			}));
		}
	};
	render() {
		return (
			<>
				<div className={ipodCss.ipodWrapper}>
					<Display
						display={this.state.display}
						menuItems={this.state.items}
						activemenu={this.state.activeMenu}
					/>
					<Wheel
						changeMenuItem={this.changeMenuItem}
						chooseItem={this.chooseItem}
					/>
				</div>
			</>
		);
	}
}
