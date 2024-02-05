import React from "react";
import wheelCss from "./wheel.module.css";
import ZingTouch from "zingtouch";

export default class Wheel extends React.Component {
	render() {
		return (
			<>
				<div id="wheelWrapper" className={wheelCss.wheelWrapper}>
					<div className={wheelCss.wheelOuter}>
						<div className={wheelCss.wheelInner}></div>
						<div className={wheelCss.topLastRowWheel}>
							<div className={wheelCss.iconsWrapperWheel}>MENU</div>
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
		var wheelRegion = document.getElementById("wheelWrapper");

		var region = new ZingTouch.Region(wheelRegion);

		region.bind(wheelRegion, "rotate", function (e) {
			// var rotatable = document.getElementById("rotatable");
			// currentAngle += e.detail.distanceFromLast;
			// rotatable.style.transform = "rotate(" + currentAngle + "deg)";
			console.log(e.detail.distanceFromLast);
		});
	}
}
