import React from "react";
import themeData from "../../theme/base";
import "../../global.scss";
import BaseApplication from "./BaseApplication";

export default function BaseContainer({ children }: { children: React.ReactNode }) {
	return (
		<BaseApplication>
			<div
				style={{
					minHeight: "100vh",
					minWidth: "100vw",
					overflowY: "auto",
					backgroundColor: themeData.colors.background,
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
				}}
			>
				{children}
			</div>
		</BaseApplication>
	);
}
