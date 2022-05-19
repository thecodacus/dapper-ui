import React from "react";
import { IStory } from "../../interfaces/IStory";
import WidgetCardBase from "./WidgetCardBase";

export default function stories({ stories }: { stories: IStory[] }) {
	return (
		<WidgetCardBase>
			<div
				style={{
					height: "3rem",
				}}
				className="container"
			>
				{stories.map((story, index) => {
					return (
						<div style={{ height: "3rem" }} key={index}>
							<div
								style={{
									width: "2.5rem",
									height: "2.5rem",
									borderRadius: "50%",
									backgroundColor: "#fff",
									backgroundImage: `url(${story.image})`,
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "center",
								}}
							></div>
							<div
								style={{
									marginLeft: "0.5rem",
									marginTop: "0.5rem",
									fontSize: "0.8rem",
									color: "#000",
								}}
							>
								{story.author}
							</div>
						</div>
					);
				})}
			</div>
		</WidgetCardBase>
	);
}
