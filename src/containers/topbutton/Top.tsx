"use client";
import { useEffect } from "react";
import "./Top.css";

export default function Top() {
	function TopEvent() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
	useEffect(() => {
		// When the user scrolls down 20px from the top of the document, show the button
		function scrollFunction() {
			const button = document.getElementById("topButton");
			if (!button) return;

			button.style.visibility =
				document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
					? "visible"
					: "hidden";
		}

		window.onscroll = scrollFunction;
		window.onload = scrollFunction;
	}, []);
	return (
		<button type="button" onClick={TopEvent} id="topButton" title="Go to top">
			<i className="fas fa-hand-point-up" aria-hidden="true"></i>
		</button>
	);
}
