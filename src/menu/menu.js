import React from "react";
import menuCss from "./menu.module.css";
import MenuItems from "../menuItems/menuItems";
export default class Menu extends React.Component {
	constructor() {
		super();
		this.state = {
			items: ["Songs", "Albums", "Artists", "Playlists"],
		};
	}
	render() {
		return (
			<>
				<div className={menuCss.leftSide}>
					<ul className={menuCss.menuItems}>
						<h2>iPod.js</h2>
						{this.state.items.map((item, index) => (
							<MenuItems key={index} item={item}></MenuItems>
						))}
					</ul>
				</div>
				<div className={menuCss.rightSide}></div>
			</>
		);
	}
}
