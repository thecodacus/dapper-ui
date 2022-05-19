import React from "react";
import { violet, blackA, mauve, green, purple } from "@radix-ui/colors";
import { styled } from "@stitches/react";
export const StyledButton = styled("button", {
	all: "unset",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "0.5rem",
	padding: "0 15px",
	fontSize: 15,
	lineHeight: 1,
	fontWeight: 500,
	height: 35,
	transition: "all 0.2s ease-in-out",
	variants: {
		variant: {
			violet: {
				backgroundColor: violet.violet4,
				color: violet.violet11,
				boxShadow: `0 2px 10px ${blackA.blackA7}`,
				"&:hover": { backgroundColor: violet.violet5 },
				"&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
			},
			green: {
				backgroundColor: green.green4,
				color: green.green11,
				"&:hover": { backgroundColor: green.green5 },
				"&:focus": { boxShadow: `0 0 0 2px ${green.green7}` },
			},
			purplePrimary: {
				backgroundColor: "rgb(137, 78, 255)",
				color: "White",
				"&:hover": {
					backgroundColor: "rgb(145 94 247)",
					boxShadow: "rgb(136 79 251 / 60%) 0px 8px 17px 5px",
					transform: "translateY(-2px)",
				},
				"&:focus": { boxShadow: "rgb(136 79 251 / 60%) 0px 8px 17px 5px" },
				boxShadow: "rgb(137 78 255 / 64%) 0px 8px 24px",
			},
		},
	},

	defaultVariants: {
		variant: "violet",
	},
});
