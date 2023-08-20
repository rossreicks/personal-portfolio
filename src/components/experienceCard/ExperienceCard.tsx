import React, { useState, useRef } from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({ cardInfo }) {
	const GetDescBullets = ({ descBullets }) => {
		return descBullets
			? descBullets.map((item, i) => (
					<li key={i} className="subTitle">
						{item}
					</li>
			  ))
			: null;
	};

	return (
		<div className="experience-card">
			<div
				style={{ background: cardInfo.companyColor }}
				className="experience-banner"
			>
				<div className="experience-blurred_div"></div>
				<div className="experience-div-company">
					<h5 className="experience-text-company">
						{cardInfo.company}
					</h5>
				</div>

				<img
					crossOrigin={"anonymous"}
					className="experience-roundedimg"
					src={cardInfo.companylogo}
					alt={cardInfo.company}
				/>
			</div>
			<div className="experience-text-details">
				<h5 className="experience-text-role">{cardInfo.role}</h5>
				<h5 className="experience-text-date">{cardInfo.date}</h5>
				<p className="subTitle experience-text-desc">{cardInfo.desc}</p>
				<ul>
					<GetDescBullets descBullets={cardInfo.descBullets} />
				</ul>
			</div>
		</div>
	);
}
