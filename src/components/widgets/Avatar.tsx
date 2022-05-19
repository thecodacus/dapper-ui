import React from "react";
import { IProfile } from "../../interfaces/IProfile";

export default function Avatar({
	profile,
	onClick,
	handlePos,
}: {
	handlePos?: "bottom" | "left" | "right" | "top";
	profile: IProfile;
	onClick?: (e: any) => void;
}) {
	const formatIPFSURL = (url: string) => {
		if (`${url}`.startsWith("ipfs://")) return `https://ipfs.io/ipfs/${url.replace("ipfs://", "")}`;
		else if (`${url}`.startsWith("ipns://")) return `https://ipfs.io/ipns/${url.replace("ipns://", "")}`;
		return url;
	};
	return (
		<div
			onClick={(e) => {
				if (onClick) onClick(profile);
			}}
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				// flexDirection: "column",
				// height: "3rem",
				gap: "0.3rem",
				cursor: "pointer",
				flexDirection: handlePos
					? handlePos === "bottom"
						? "column"
						: handlePos === "top"
						? "column-reverse"
						: handlePos === "right"
						? "row"
						: "row-reverse"
					: "row",
			}}
		>
			<div
				style={{
					width: "2.5rem",
					height: "2.5rem",
					borderRadius: "50%",
					backgroundImage: `url(${
						formatIPFSURL(profile.imageURI) ||
						"https://cdn.dribbble.com/users/17793/screenshots/16101765/media/beca221aaebf1d3ea7684ce067bc16e5.png"
					})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			></div>
			<div className="meta">
				<div style={{ fontWeight: "bold" }} className="name">
					@{profile.handle}
				</div>
			</div>
		</div>
	);
}
