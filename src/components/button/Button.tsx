import React from "react";
import "./Button.css";

type Props = {
	text: string;
	className?: string;
	href: string;
	newTab?: boolean;
};

export default function Button({ text, className, href, newTab }: Props) {
	return (
		<div className={className}>
			<a className="main-button" href={href} target={newTab && "_blank"}>
				{text}
			</a>
		</div>
	);
}
