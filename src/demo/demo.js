import React from "react";
import demoCss from "./demo.module.css";

export default class Demo extends React.Component {
	render() {
		return (
			<>
				<div className={demoCss.demoDisplay}>{this.props.display}</div>
			</>
		);
	}
}
