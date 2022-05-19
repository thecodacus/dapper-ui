import React from "react";
import { BsPlusSquare } from "react-icons/bs";
import themeData from "../../../theme/base";
import { styled } from "@stitches/react";
import { violet } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "../Primitives/DialogPrimitive";
import { StyledButton } from "../Primitives/ButtonsPrimitive";
import Avatar from "../Avatar";
import { IProfile } from "../../../interfaces/IProfile";
import { useDispatch, useSelector } from "react-redux";
import { profileActions, RootState } from "../../../state";
import { AttachmentType } from "../../../lib/dapperContract";

// Your app...
const Flex = styled("div", { display: "flex" });
const Box = styled("div", {});

const IconButton = styled("button", {
	all: "unset",
	fontFamily: "inherit",
	borderRadius: "100%",
	height: 25,
	width: 25,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	color: violet.violet11,
	position: "absolute",
	top: 10,
	right: 10,

	"&:hover": { backgroundColor: violet.violet4 },
	"&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

const Fieldset = styled("fieldset", {
	all: "unset",
	display: "flex",
	gap: 20,
	alignItems: "center",
	marginBottom: 15,
});

const Label = styled("label", {
	fontSize: 15,
	color: violet.violet11,
	width: 90,
	textAlign: "right",
});

const Input = styled("input", {
	all: "unset",
	width: "100%",
	flex: "1",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: 4,
	padding: "0 10px",
	fontSize: 15,
	lineHeight: 1,
	color: violet.violet11,
	boxShadow: `0 0 0 1px ${violet.violet7}`,
	height: 35,

	"&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const StatusInput = styled("textarea", {
	all: "unset",
	width: "100%",
	flex: "1",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: 4,
	// padding: "0 10px",
	fontSize: 15,
	lineHeight: 1,
	color: violet.violet11,
	boxShadow: `0 0 0 1px ${violet.violet7}`,
	height: "10rem",
	padding: "1rem",
	boxSizing: "border-box",
});

const NewPostDialog = ({ profile, onPublish }: { profile: IProfile; onPublish: (data: { content: string }) => void }) => {
	const [content, setContent] = React.useState("");
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div>
					<BsPlusSquare fontSize="1.05rem" color="black" fontWeight="bold"></BsPlusSquare>
				</div>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle></DialogTitle>
				<div
					style={{
						display: "flex",
						padding: "0 20px",
						gap: 20,
					}}
				>
					<div style={{}}>
						<Avatar profile={profile}></Avatar>
					</div>
					<div
						style={{
							flex: 1,
							// display: "flex",
							// flexDirection: "column",
							height: "fit-content",
						}}
					>
						<StatusInput aria-multiline maxLength={256} value={content} onChange={(e) => setContent(e.target.value)}></StatusInput>
						<Flex css={{ marginTop: 25, justifyContent: "flex-end" }}>
							<DialogClose asChild>
								<StyledButton
									aria-label="Close"
									variant="purplePrimary"
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										if (onPublish) {
											onPublish({ content });
										}
									}}
								>
									Publish
								</StyledButton>
							</DialogClose>
						</Flex>
					</div>
				</div>
				<DialogClose asChild>
					<IconButton>
						<Cross2Icon />
					</IconButton>
				</DialogClose>
			</DialogContent>
		</Dialog>
	);
};

export default function NewPostButton() {
	const profile = useSelector((state: RootState) => state.profile);
	const dispatch = useDispatch();
	return (
		<div>
			<button
				style={{
					backgroundColor: themeData.colors.background,
					border: "none",
					borderRadius: "50%",
					height: "2rem",
					width: "2rem",
					lineHeight: "70%",
					cursor: "pointer",
				}}
			>
				{profile.selectedProfile && (
					<NewPostDialog
						profile={profile.selectedProfile}
						onPublish={async (data) => {
							console.log(data);
							dispatch(
								profileActions.publishPost({
									postText: data.content,
									attachmentType: AttachmentType.NONE,
									postAttachmentUri: "",
								})
							);
							// await request;
							console.log("after request");
						}}
					></NewPostDialog>
				)}
			</button>
		</div>
	);
}
