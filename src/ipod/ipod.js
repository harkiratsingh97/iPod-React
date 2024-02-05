import React from "react";
import Display from "../display/display";
import Wheel from "../wheel/wheel";
import ipodCss from "./ipod.module.css";

export default class Ipod extends React.Component {
	render() {
		return (
			<>
				<div className={ipodCss.ipodWrapper}>
					<Display />
					<Wheel />
				</div>
			</>
		);
	}
}
