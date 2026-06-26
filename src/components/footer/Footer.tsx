"use client";
import "./Footer.css";
import { Fade } from "@/components/Fade";

export default function Footer() {
	return (
		<Fade bottom duration={1000} distance="5px">
			<div className="footer-div">
				<p className="footer-text">
					Portfolio Template by{" "}
					<a href="https://github.com/BharatKammakatla/Developer-Portfolio">
						Bharat Kammakatla
					</a>
				</p>
			</div>
		</Fade>
	);
}
