import React from "react";
import displayCss from "./display.module.css";
import Menu from "../menu/menu";
import Demo from "../demo/demo";


// It is our screen to display Menu's and other Demo Screens
export default class Display extends React.Component {
	render() {
		return (
			<>
				<div className={displayCss.displayWrapper}>
					{(this.props.display === "mainMenu" ||
						this.props.display === "Music") && (
						<Menu
							menuItems={this.props.menuItems}
							display={this.props.display}
							activemenu={this.props.activemenu}
						></Menu>
					)}

					{this.props.display !== "mainMenu" &&
						this.props.display !== "Music" && (
							<Demo display={this.props.display}></Demo>
						)}
				</div>
			</>
		);
	}
}
