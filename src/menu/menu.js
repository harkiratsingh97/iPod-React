import React from "react";
import menuCss from "./menu.module.css";
import styled from "styled-components";

//Styled Component used to display all the items in the list and the style changes accoring to the activeMenu for selected Item
const MenuItems = styled.li`
	list-style: none;
	font-size: 22px;
	font-weight: 500;
	line-height: 47px;
	color: ${(props) => (props.activemenu === props.index ? "white" : "black")};
	background-color: ${(props) =>
		props.activemenu === props.index ? "#3783D8" : "none"};
	padding-left: 5px;
`;

//Here all the list items are displayed
export default class Menu extends React.Component {
	render() {
		return (
			<>
				<div className={menuCss.leftSide}>
					<ul className={menuCss.menuItems}>
						{/*This is shown when we are at Main Menu*/}

						{this.props.display === "mainMenu" && (
							<>
								<h2>iPod.js</h2>
								{this.props.menuItems.map((item, index) => (
									<MenuItems
										key={index}
										index={index}
										activemenu={this.props.activemenu}
									>
										{item}
									</MenuItems>
								))}
							</>
						)}

						{/*This is shown when we are at SubMenu - Music*/}

						{this.props.display === "Music" && (
							<>
								<h2>Music</h2>
								{this.props.menuItems.map((item, index) => (
									<MenuItems
										key={index}
										index={index}
										activemenu={this.props.activemenu}
									>
										{item}
									</MenuItems>
								))}
							</>
						)}
					</ul>
				</div>
				<div className={menuCss.rightSide}></div>
			</>
		);
	}
}
