import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { walletActions } from "../../../state";
import PrimaryButton from "./PrimaryButton";
export default function WalletConnectButton() {
	const dispatch = useDispatch();
	return (
		<PrimaryButton
			onClick={() => {
				dispatch(walletActions.connectWallet());
			}}
		>
			Connect Wallet
		</PrimaryButton>
	);
}
