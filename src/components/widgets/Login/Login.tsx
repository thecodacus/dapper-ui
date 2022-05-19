import { Link } from "gatsby";
import React, { ReactNode, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileActions, RootState } from "../../../state";
import { SliceState } from "../../../state/statuses";
import Avatar from "../Avatar";
import WalletConnectButton from "../Buttons/WalletConnectButton";
import WidgetCardBase from "../WidgetCardBase";
import themeData from "../../../theme/base";
import * as styles from "./login.module.scss";
import { IProfile } from "../../../interfaces/IProfile";

const avatarButtonStyle: { [key: string]: any } = {
	backgroundColor: "#4e4e4e26",
	padding: "0.8rem 0.5rem",
	borderRadius: "0.5rem",
	cursor: "pointer",
	"&:hover": {
		backgroundColor: "#4e4e4e",
	},
};

export default function Login({ onLogin }: { onLogin?: (profile: IProfile) => void }) {
	const profileState = useSelector((state: RootState) => state.profile);
	const walletState = useSelector((state: RootState) => state.wallet);
	const dispatch = useDispatch();
	let loginAction: ReactNode;
	if (walletState.status === SliceState.Loaded) {
		switch (profileState.status) {
			case SliceState.Loading:
				loginAction = <div>Loading...</div>;
				break;
			case SliceState.Loaded:
				if (profileState.profiles.length === 0) {
					loginAction = <div>No Profile is created</div>;
					break;
				}
				loginAction = (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							gap: "1rem",
						}}
					>
						{profileState.profiles.map((profile, index) => {
							return (
								<div className={styles.avatarContainer}>
									<Avatar
										onClick={(e) => {
											dispatch(profileActions.selectProfile(index));
											if (onLogin) onLogin(profile);
										}}
										profile={profile}
									/>
								</div>
							);
						})}
					</div>
				);
				break;
			case SliceState.Unloaded:
				dispatch(profileActions.loadProfile());
				// loginAction = <WalletConnectButton></WalletConnectButton>;
				break;
			case SliceState.Error:
				loginAction = (
					<>
						<div>{profileState.error?.toString()}</div>
						<WalletConnectButton></WalletConnectButton>
					</>
				);

			default:
				break;
		}
	} else {
		loginAction = <WalletConnectButton></WalletConnectButton>;
	}

	return (
		<WidgetCardBase>
			<div
				style={{
					textAlign: "center",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<h1
					style={{
						color: themeData.colors.primary,
					}}
				>
					Login
				</h1>
				{loginAction}
				<Link to="/register">Sign up</Link>
			</div>
		</WidgetCardBase>
	);
}
