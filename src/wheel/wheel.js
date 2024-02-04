import React from "react";
import wheelCss from "./wheel.module.css";

export default function Wheel() {
	return (
		<>
			<div className={wheelCss.wheelWrapper}>
				<div className={wheelCss.wheelOuter}>
					<div className={wheelCss.wheelInner}></div>
					<div className={wheelCss.topLastRowWheel}>
						<div className={wheelCss.menuWheel}></div>
					</div>
					<div className={wheelCss.middleRowWheel}>
						<div className={wheelCss.leftRightIcon}></div>
						<div className={wheelCss.leftRightIcon}></div>

					</div>
					<div className={wheelCss.topLastRowWheel}>
						<div className={wheelCss.menuWheel}></div>
					</div>
				</div>
			</div>
		</>
	);
}
