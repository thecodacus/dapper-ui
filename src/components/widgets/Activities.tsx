import React from "react";
import { IActivity } from "../../interfaces/IActivity";
import WidgetCardBase from "./WidgetCardBase";

export default function Activities({ activities }: { activities: IActivity[] }) {
	return (
		<WidgetCardBase>
			<div className="card-header">
				<h4
					style={{
						margin: 0,
					}}
				>
					Activities
				</h4>
			</div>
			<div className="card-body">
				<ul className="list-group">
					{activities.map((activity) => (
						<li className="list-group-item">
							<span className={`badge badge-${activity.type}`}>{activity.type}</span>
							{activity.actor.handle} {activity.description}
						</li>
					))}
				</ul>
			</div>
		</WidgetCardBase>
	);
}
