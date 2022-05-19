import React from "react";
import themeData from "../../../../theme/base";
import * as styles from "../textfield/textfield.module.scss";
export default function FileField({ label, value, onChange }: { value?: string; label?: string; onChange?: (value: string) => void }) {
	return (
		<div className={styles.inputContainer}>
			<input
				type={"file"}
				className={styles.input}
				style={{
					backgroundColor: themeData.colors.background,
					color: "#454545",
				}}
				value={value}
				onChange={(e) => {
					if (onChange) onChange(e.target.value);
				}}
				placeholder={" "}
			></input>
			{label && (
				<div
					style={
						{
							// backgroundColor: themeData.colors.background,
						}
					}
					className={styles.cut}
				></div>
			)}
			{label && (
				<label
					style={{
						backgroundColor: themeData.colors.background,
					}}
					className={styles.placeholder}
				>
					{label}
				</label>
			)}
		</div>
	);
}
