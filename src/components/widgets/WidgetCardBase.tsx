import React, { FC, ReactPropTypes } from "react";
import themeData from "../../theme/base";
export default function WidgetCardBase({ children }: { children: React.ReactNode }) {
	return (
		<div
			style={{
				display: "block",
				// width: '100%',
				// height: '100%',
				backgroundColor: "#fff",
				borderRadius: themeData.border.radious,
				boxShadow: themeData.shadow.boxShadow,
				transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
				padding: "1.5rem 1rem",
			}}
		>
			{children}
		</div>
	);
}
