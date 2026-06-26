import "./page.module.css";
import { GraphQLClient } from "graphql-request";
import { type GetGithubUserQuery, getSdk } from "@/gql/client";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Certifications from "../containers/certifications/Certifications";
import Greeting from "../containers/greeting/Greeting";
import Profile from "../containers/profile/Profile";
import Projects from "../containers/projects/Projects";
import Skills from "../containers/skills/Skills";
import Top from "../containers/topbutton/Top";
import WorkExperience from "../containers/workExperience/WorkExperience";

export const dynamic = "force-dynamic";

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
				contributions={data.user.contributionsCollection.contributionCalendar}
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
	if (!process.env.GITHUB_TOKEN) return emptyGithubData;

	try {
		const client = new GraphQLClient("https://api.github.com/graphql", {
			headers: {
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
			},
		});

		const sdk = getSdk(client);

		return await sdk.GetGithubUser({ username: "rossreicks" });
	} catch (error) {
		console.error("Failed to load GitHub data", error);
		return emptyGithubData;
	}
}

const emptyGithubData = {
	user: {
		name: "Ross Reicks",
		bio: "Software Engineer",
		isHireable: false,
		avatarUrl: "https://github.com/rossreicks.png",
		location: null,
		pinnedItems: { totalCount: 0, edges: [] },
		contributionsCollection: {
			contributionCalendar: { totalContributions: 0, weeks: [] },
		},
	},
} satisfies GetGithubUserQuery;

export default App;
