import React from "react";
import { IMessage } from "../../interfaces/IMessage";
import WidgetCardBase from "./WidgetCardBase";

export default function Messages({ messages }: { messages: IMessage[] }) {
	return (
		<WidgetCardBase>
			<div className="card-header">
				<h4
					style={{
						margin: 0,
					}}
				>
					Messages
				</h4>
			</div>
			<div className="card-body">
				<ul className="list-group">
					{messages.map((message) => (
						<li key={message.id}>
							{/* <span className={`badge badge-${message.type}`}>{message.type}</span> */}
							{message.from.handle} {message.message}
						</li>
					))}
				</ul>
			</div>
		</WidgetCardBase>
	);
}
