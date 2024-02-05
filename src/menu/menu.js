import React from "react";
import menuCss from "./menu.module.css";
// import MenuItems from "../menuItems/menuItems";

import styled from "styled-components";

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

// // background-color : ${(props) => (props.filled ? props.bg : "#fff")};
// color:  ${(props) => (props.filled ? props.color : "#000")};
// border:  ${(props) => (props.filled && "none")};
// border-color : ${(props) => (!props.filled && "#000")}

export default class Menu extends React.Component {
	render() {
		return (
			<>
				<div className={menuCss.leftSide}>
					<ul className={menuCss.menuItems}>
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
					</ul>
				</div>
				<div className={menuCss.rightSide}></div>
			</>
		);
	}
}
