import React from "react";
import demoCss from "./demo.module.css";

//This component is used to display the Dummy data in all the screens
export default class Demo extends React.Component {
	render() {
		return (
			<>
				<div className={demoCss.demoDisplay}>{this.props.display}</div>
			</>
		);
	}
}
