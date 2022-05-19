import React from "react";
import NewPostButton from "../widgets/Buttons/NewPostButton";
import ProfileButton from "../widgets/Buttons/ProfileButton";
import GlobalSearch from "../widgets/GlobalSearch";
import themeData from "../../theme/base";
export default function Navbar(props: any) {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "1fr 1.5fr 1fr",
				gap: "1rem",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "0.5rem 1rem",
				backgroundColor: "#fff",
				boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
				// borderBottom: '1px solid #e9ecef',
			}}
		>
			<div
				style={{
					fontSize: "1.5rem",
					fontWeight: "bold",
					// color: themeData.colors.primary,
				}}
			>
				{props.brand || "Dapper"}
			</div>
			<GlobalSearch></GlobalSearch>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-end",
					alignItems: "center",
					gap: "0.5rem",
				}}
			>
				<NewPostButton></NewPostButton>
				<ProfileButton></ProfileButton>
			</div>
		</div>
	);
}
