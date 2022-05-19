import React from "react";
import BaseContainer from "../../components/layouts/BaseContainer";
import Register from "../../components/widgets/Register";
import * as styles from "./register.module.scss";
export default function index() {
	return (
		<BaseContainer>
			<div className={styles.registernWidget}>
				<Register />
			</div>
		</BaseContainer>
	);
}
