import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../../global.scss";
import BaseContainer from "./BaseContainer";
import BaseApplication from "./BaseApplication";

export default function MainContainer({ children }: { children: React.ReactNode }) {
	return (
		<BaseApplication>
			<BaseContainer>
				<Navbar></Navbar>
				<main style={{ flex: 1, padding: "0.5rem 1rem" }}>{children}</main>
				<Footer></Footer>
			</BaseContainer>
		</BaseApplication>
	);
}
