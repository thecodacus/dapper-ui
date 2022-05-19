// import { create } from "ipfs-http-client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IPFSStorage } from "../../../../lib/ipfs";
import { RootState } from "../../../../state";
import * as styles from "./avatarfiled.module.scss";
export default function AvatarField({ onChange }: { onChange?: (value: string | undefined) => void }) {
	const storageState = useSelector((state: RootState) => state.storage);
	const [cid, setCid] = React.useState<string | null>(null);
	return (
		<div className={styles.avatarField}>
			<div className={styles.avatar}>
				<div
					className={styles.avatarImage}
					style={{
						backgroundImage: `${cid ? `url("https://cloudflare-ipfs.com/ipfs/${cid}")` : 'url("/dummyAvatar.png")'}`,
					}}
				/>
			</div>
			<div className={styles.inputContainer}>
				<input
					type="file"
					className={styles.avatarFileInput}
					style={{
						backgroundColor: "#454545",
						color: "#fff",
					}}
					onChange={async (e) => {
						console.log(e.target.files);
						if (e?.target?.files) {
							let resp = await IPFSStorage.addFile(e.target.files[0]);
							let cidString = resp.toString();
							console.log(cidString);
							setCid(cidString);
							if (onChange) onChange(cidString);
						}
					}}
					placeholder={" "}
				></input>
			</div>
		</div>
	);
}
