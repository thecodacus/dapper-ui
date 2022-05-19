import * as styles from "./home.module.scss";

import React from "react";
import MainContainer from "../../components/layouts/MainContainer";
import Stories from "../../components/widgets/Stories";
import Activities from "../../components/widgets/Activities";
import Messages from "../../components/widgets/Messages";
import Suggestions from "../../components/widgets/Suggestions";
import Explore from "../../components/widgets/Explore";
import { IPost } from "../../interfaces/IPost";
import Feed from "../../components/widgets/Feed";

export default function index() {
	const [feeds, setFeeds] = React.useState<IPost[]>([]);
	return (
		<MainContainer>
			<div className={styles.container}>
				<div className={styles.left}>
					<Activities activities={[]} />
					<Explore profiles={[]} />
				</div>
				<div className={styles.center}>
					<Stories stories={[]} />
					<Feed />
				</div>
				<div className={styles.right}>
					<Messages messages={[]} />
					<Suggestions suggestions={[]} />
				</div>
			</div>
		</MainContainer>
	);
}
