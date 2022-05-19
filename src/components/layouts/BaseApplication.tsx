import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { RootState, walletActions } from "../../state";

export default function BaseApplication({ children }: { children: React.ReactNode }) {
	const disptch = useDispatch();
	const wallet = useSelector((state: RootState) => state.wallet);
	useEffect(() => {
		if (wallet.address == null) disptch(walletActions.tryConnectWallet());
	}, [disptch]);
	return (
		<>
			<Helmet>
				<script src={"/js/ipfs-core.min.js"}></script>
			</Helmet>
			<div>{children}</div>;
		</>
	);
}
