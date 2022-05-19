import React from "react";
import { IProfile } from "../../interfaces/IProfile";
import WidgetCardBase from "./WidgetCardBase";

export default function Suggestions({ suggestions }: { suggestions: IProfile[] }) {
	return (
		<WidgetCardBase>
			<div className="card-header">
				<h4
					style={{
						margin: 0,
					}}
				>
					Suggestions
				</h4>
			</div>
			<div className="card-body">
				<ul className="list-group">
					{suggestions.map((profile) => (
						<li key={profile.id}>
							{/* <span className={`badge badge-${message.type}`}>{message.type}</span> */}
							{profile.handle}
						</li>
					))}
				</ul>
			</div>
		</WidgetCardBase>
	);
}
