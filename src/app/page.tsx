import React from "react";
import "./page.module.css";
import Header from "../components/header/Header";
import Greeting from "../containers/greeting/Greeting";
import Skills from "../containers/skills/Skills";
import WorkExperience from "../containers/workExperience/WorkExperience";
import Projects from "../containers/projects/Projects";
import Certifications from "../containers/certifications/Certifications";
import Profile from "../containers/profile/Profile";
import Footer from "../components/footer/Footer";
import Top from "../containers/topbutton/Top";
import Family from "@/containers/family/Family";
import Hobbies from "@/containers/achievements/Achievements";
import Achievements from "@/containers/achievements/Achievements";
import { Get_Github_User } from "@/queries/github-user";
import { GraphQLClient } from "graphql-request";
import { GetGithubUserQuery, getSdk } from "@/gql/client";

async function App() {
	const data = await getData();

	return (
		<div>
			<Header />
			<Greeting />
			<Skills />
			<WorkExperience />
			<Projects
				repos={data.user.pinnedItems.edges}
				contributions={
					data.user.contributionsCollection.contributionCalendar
				}
			/>
			{/* <Family />
			<Achievements /> */}
			<Certifications />
			{/* <Hobbies /> */}
			<Profile prof={data.user} />
			<Footer />
			<Top />
		</div>
	);
}

async function getData() {
	const client = new GraphQLClient("https://api.github.com/graphql", {
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
		},
	});

	const sdk = getSdk(client);

	return await sdk.GetGithubUser({ username: "rossreicks" });
}

export default App;
