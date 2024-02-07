import React from "react";
import Ipod from "./ipod/ipod";

//This is the starting Component where I am calling my iPod Component
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Ipod />
			</div>
		);
	}
}

export default App;
