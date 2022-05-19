import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPost } from "../../interfaces/IPost";
import { AttachmentType } from "../../lib/dapperContract";
import { RootState } from "../../state";
import { feedActions } from "../../state/feeds";
import Avatar from "./Avatar";
import WidgetCardBase from "./WidgetCardBase";

export default function Feed() {
	const dispatch = useDispatch();
	const selectedProfile = useSelector((state: RootState) => state.profile.selectedProfile);
	useEffect(() => {
		dispatch(feedActions.loadFeeds({ limit: 1500 }));
	}, [dispatch, selectedProfile]);
	const feeds = useSelector((state: RootState) => state.feeds);
	// let feeds: any = {
	// 	posts: [],
	// };
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
			}}
		>
			{feeds.posts.map((post: IPost) => (
				<WidgetCardBase key={post.id}>
					<div
						style={{
							display: "flex",
						}}
						className="card-header"
					>
						<Avatar profile={post.author} handlePos={"right"} />
					</div>
					{post.attachmentType == AttachmentType.IMAGE ? (
						<div>
							<img src={post.attachmentUri} alt="" />
						</div>
					) : null}
					<div
						style={{
							marginLeft: "3.5rem",
							marginTop: "0px",
						}}
						className="card-body"
					>
						<p
							style={{
								marginTop: "0px",
							}}
							className="card-text"
						>
							{post.text}
						</p>
					</div>
				</WidgetCardBase>
			))}
		</div>
	);
}
