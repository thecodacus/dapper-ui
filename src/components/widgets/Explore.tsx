import React from "react";
import { IProfile } from "../../interfaces/IProfile";
import WidgetCardBase from "./WidgetCardBase";

export default function Explore({ profiles }: { profiles: IProfile[] }) {
	return (
		<WidgetCardBase>
			<div className="card-header">
				<h4
					style={{
						margin: 0,
					}}
				>
					Explore
				</h4>
			</div>
			<div className="card-body">
				<ul className="list-group">
					{profiles.map((profile) => (
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
