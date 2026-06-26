"use client";
import "./Project.css";
import Calendar from "react-github-contribution-calendar";
import type { GetGithubUserQuery } from "@/gql/client";
import Button from "../../components/button/Button";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import { socialMediaLinks } from "../../portfolio";

const formatNumberWithCommas = (num: number) =>
	num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default function Projects({
	repos,
	contributions,
}: {
	repos: NonNullable<
		NonNullable<GetGithubUserQuery["user"]>["pinnedItems"]["edges"]
	>;
	contributions: NonNullable<
		GetGithubUserQuery["user"]
	>["contributionsCollection"]["contributionCalendar"];
}) {
	const values: { [date: string]: number } = contributions.weeks.reduce(
		(acc, week) => {
			week.contributionDays.forEach((day) => {
				acc[String(day.date)] = Number(day.contributionCount);
			});
			return acc;
		},
		{} as { [date: string]: number },
	);

	const lastDate: string = new Date().toDateString();
	const panelColors = ["#EEEEEE", "#D6E685", "#8CC665", "#44A340", "#1E6823"];

	return (
		<div className="main" id="opensource">
			<h1 className="project-title">Projects</h1>
			<div className="container">
				<div className="repo-cards-div-main">
					{repos.map((repo, _i) => {
						return <GithubRepoCard repo={repo} key={repo.node.id as string} />;
					})}
				</div>
				<div className="github-calendar">
					<p>
						{`${formatNumberWithCommas(contributions.totalContributions)} `}
						contributions in the last year
					</p>
					<Calendar
						values={values}
						until={lastDate}
						weekLabelAttributes={undefined}
						panelAttributes={undefined}
						monthLabelAttributes={undefined}
						panelColors={panelColors}
					/>
				</div>
			</div>
			<Button
				text={"More Projects"}
				className="project-button"
				href={socialMediaLinks.github}
				newTab={true}
			/>
		</div>
	);
}
