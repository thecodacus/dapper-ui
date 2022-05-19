import React from "react";
import themeData from "../../../theme/base";
export default function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick?: (e: any) => void }) {
	return (
		<button
			style={{
				backgroundColor: themeData.colors.primary,
				border: "none",
				padding: "0.5rem",
				borderRadius: "0.5rem",
				color: "white",
				fontFamily: themeData.font?.fontFamily || "inherit",
				fontWeight: "bold",
				boxShadow: themeData.shadow.boxShadowPrimary,
				cursor: "pointer",
			}}
			onClick={(e) => {
				if (onClick) onClick(e);
			}}
		>
			{children}
		</button>
	);
}
