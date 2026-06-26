"use client";
import Image from "next/image";
import "./Skills.css";
import { Fade } from "@/components/Fade";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";

export default function Skills() {
	return (
		<div className="main" id="skills">
			<div className="skills-main-div">
				<Fade left duration={1000}>
					<div className="skills-image-div">
						<Image
							alt="Bharat Working"
							src="/images/developerActivity.svg"
							width={600}
							height={500}
						/>
					</div>
				</Fade>
				<Fade right duration={1000}>
					<div className="skills-text-div">
						<h1 className="skills-heading">{skillsSection.title} </h1>
						<p className="subTitle skills-text-subtitle">
							{skillsSection.subTitle}
						</p>
						<SoftwareSkill />
						<div>
							{skillsSection.skills.map((skills) => {
								return (
									<p key={String(skills)} className="subTitle skills-text">
										{skills}
									</p>
								);
							})}
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
}
