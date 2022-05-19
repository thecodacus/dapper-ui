import React from "react";

export default function ProfileButton(props: any) {
	return (
		<div>
			<div
				style={{
					width: "2rem",
					height: "2rem",
					borderRadius: "50%",
					backgroundImage: `url(${
						props.image || "https://cdn.dribbble.com/users/17793/screenshots/16101765/media/beca221aaebf1d3ea7684ce067bc16e5.png"
					})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			></div>
		</div>
	);
}
