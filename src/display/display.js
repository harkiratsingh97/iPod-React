import React from "react";
import displayCss from "./display.module.css";
import Menu from "../menu/menu";
export default class Display extends React.Component {
	render() {
		return (
			<>
				<div className={displayCss.displayWrapper}>
					{this.props.display == "Menu" && (
						<Menu
							menuItems={this.props.menuItems}
							activemenu={this.props.activemenu}
						></Menu>
					)}
				</div>
			</>
		);
	}
}
