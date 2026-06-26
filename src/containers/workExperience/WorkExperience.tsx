"use client";
import "./WorkExperience.css";
import { Fade } from "@/components/Fade";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";

export default function WorkExperience() {
	if (workExperiences.viewExperiences) {
		return (
			<div id="experience">
				<Fade bottom duration={1000} distance="20px">
					<div className="experience-container" id="workExperience">
						<div>
							<h1 className="experience-heading">Experiences</h1>
							<div className="experience-cards-div">
								{workExperiences.experience.map((card) => {
									return (
										<ExperienceCard
											key={card.companylogo}
											cardInfo={{
												company: card.company,
												desc: card.desc,
												date: card.date,
												companylogo: card.companylogo,
												role: card.role,
												descBullets: card.descBullets,
												companyColor: card.companyColor,
											}}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</Fade>
			</div>
		);
	}
	return null;
}
