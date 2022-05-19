import React from "react";
import { navigate } from "gatsby";
import BaseContainer from "../../components/layouts/BaseContainer";
import Login from "../../components/widgets/Login/Login";
import * as styles from "./login.module.scss";
export default function index() {
	return (
		<BaseContainer>
			<div className={styles.loginWidget}>
				<Login
					onLogin={() => {
						navigate("/home");
					}}
				></Login>
			</div>
		</BaseContainer>
	);
}
