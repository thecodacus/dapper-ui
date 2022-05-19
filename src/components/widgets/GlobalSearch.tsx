import React from "react";
import themeData from "../../theme/base";
import { FaSearch } from "react-icons/fa";

export default function GlobalSearch() {
	const [search, setSearch] = React.useState("");

	const onSearch = (e: React.MouseEvent) => {
		console.log(search);
	};

	return (
		<div
			style={{
				backgroundColor: themeData.colors.background,
				border: "none",
				// width: "100%",
				borderRadius: "10rem",
				padding: "0.3rem",
			}}
		>
			<form action="#">
				<button
					style={{
						backgroundColor: "transparent",
						border: "none",
						transform: "translateY(2px)",
						color: "grey",
					}}
					onClick={onSearch}
				>
					<FaSearch></FaSearch>
					<span></span>
				</button>
				<input
					style={{
						backgroundColor: "transparent",
						border: "none",
						width: "calc(100% - 2.5rem)",
						outline: "none",
					}}
					type="text"
					placeholder="Search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					required
				></input>
			</form>
		</div>
	);
}
