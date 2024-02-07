import React from "react";
import wheelCss from "./wheel.module.css";
import ZingTouch from "zingtouch";

export default class Wheel extends React.Component {
	render() {
		return (
			<>
				<div id="wheelWrapper" className={wheelCss.wheelWrapper}>
					<div className={wheelCss.wheelOuter}>
						<div
							className={wheelCss.wheelInner}
							onClick={this.props.chooseItem}
						></div>
						<div className={wheelCss.topLastRowWheel}>
							<div
								className={wheelCss.iconsWrapperWheel}
								onClick={this.props.handleMenuClick}
							>
								MENU
							</div>
						</div>
						<div className={wheelCss.middleRowWheel}>
							<div className={wheelCss.iconsWrapperWheel}>
								<img
									alt="previous-track"
									src="https://cdn-icons-png.flaticon.com/128/5725/5725916.png"
									className={wheelCss.rotate180}
								></img>
							</div>
							<div className={wheelCss.iconsWrapperWheel}>
								<img
									alt="next-track"
									src="https://cdn-icons-png.flaticon.com/128/5725/5725916.png"
								></img>
							</div>
						</div>
						<div className={wheelCss.topLastRowWheel}>
							<div className={wheelCss.iconsWrapperWheel}>
								<img
									alt="play-pause"
									src="https://cdn-icons-png.flaticon.com/128/8428/8428588.png"
								></img>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
	componentDidMount() {
		const { changeMenuItem } = this.props;
		var wheelRegion = document.getElementById("wheelWrapper");

		var rotate = new ZingTouch.Region(wheelRegion);

		rotate.bind(wheelRegion, "rotate", function (e) {
			if (Math.abs(e.detail.distanceFromLast) > 2) {
				changeMenuItem();
			}
		});
	}
}
