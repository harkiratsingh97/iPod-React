import React from "react";
import displayCss from "./display.module.css";
import Menu from "../menu/menu";
export default class Display extends React.Component {
	render() {
		return (
			<>
				<div className={displayCss.displayWrapper}>
					<Menu></Menu>
				</div>
			</>
		);
	}
}
