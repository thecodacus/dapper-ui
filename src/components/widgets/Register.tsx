import React, { useEffect } from "react";
import PrimaryButton from "./Buttons/PrimaryButton";
import TextField from "./FormFields/textfield/TextField";
import WidgetCardBase from "./WidgetCardBase";
import themeData from "../../theme/base";
import FileField from "./FormFields/fileField/FileField";
import AvatarField from "./FormFields/AvatarField/AvatarField";
import { useDispatch, useSelector } from "react-redux";
import { profileActions, RootState } from "../../state";
import { SliceState } from "../../state/statuses";
import WalletConnectButton from "./Buttons/WalletConnectButton";
let styles: { [key: string]: any } = {
	control: {
		display: "flex",
		flexDirection: "column",
		textAlign: "left",
	},
};

export default function Register() {
	const [handle, setHandle] = React.useState("");
	const [imageUri, setImageUri] = React.useState<undefined | string>(undefined);
	const [label, setLebel] = React.useState("");
	const [state, setState] = React.useState<SliceState>(SliceState.Unloaded);

	const profileState = useSelector((state: RootState) => state.profile);
	const walletState = useSelector((state: RootState) => state.wallet);

	const dispatch = useDispatch();
	useEffect(() => {
		if (profileState.status == SliceState.Error) {
			setLebel(profileState.error || "Unknown Error");
		} else if (profileState.status == SliceState.Loading) {
			setLebel("Loading...");
		} else if (state == SliceState.Loading && profileState.status == SliceState.Loaded) {
			setLebel("Successfully Registared");
		}
		setState(profileState.status);
	}, [profileState.status]);
	return (
		<WidgetCardBase>
			<div
				style={{
					textAlign: "center",
					gap: "1rem",
					display: "flex",
					flexDirection: "column",
				}}
			>
				{/* <img src="https://cloudflare-ipfs.com/ipfs/QmPVGkNDrhk2JzA9vBuQMHxTPPzfkDj5M6dkH1FwjBjtGB"></img> */}
				<h1
					style={{
						color: themeData.colors.primary,
					}}
				>
					Sign Up
				</h1>
				{walletState.status == SliceState.Loaded ? (
					<>
						<label>{label}</label>
						<form>
							<div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
								<div style={styles.control}>
									{/* <label htmlFor="image">Profile Image</label> */}
									<AvatarField
										onChange={(cid) => {
											setImageUri(`ipfs://${cid}`);
										}}
									/>
								</div>
								<div style={styles.control}>
									{/* <label htmlFor="handle">Handle</label> */}
									<TextField label="Handle" value={handle} onChange={(value) => setHandle(value)} />
								</div>
							</div>
						</form>
						<PrimaryButton
							onClick={async () => {
								await dispatch(profileActions.registerProfile({ handle, imageUri }));
							}}
						>
							Sign up
						</PrimaryButton>
					</>
				) : (
					<div style={{}}>
						<WalletConnectButton></WalletConnectButton>
					</div>
				)}
			</div>
		</WidgetCardBase>
	);
}
