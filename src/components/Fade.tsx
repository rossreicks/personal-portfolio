import type { CSSProperties, ReactNode } from "react";
import "./Fade.css";

type FadeProps = {
	bottom?: boolean;
	left?: boolean;
	right?: boolean;
	distance?: string;
	duration?: number;
	children: ReactNode;
};

export function Fade({
	bottom,
	left,
	right,
	distance = "20px",
	duration = 1000,
	children,
}: FadeProps) {
	const direction = bottom ? "bottom" : left ? "left" : right ? "right" : "";

	return (
		<div
			className={["fade", direction && `fade-${direction}`]
				.filter(Boolean)
				.join(" ")}
			style={
				{
					"--fade-distance": distance,
					"--fade-duration": `${duration}ms`,
				} as CSSProperties
			}
		>
			{children}
		</div>
	);
}
