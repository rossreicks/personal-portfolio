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

async function App() {
	const { data } = await getData();

	return (
		<div>
			<Header />
			<Greeting />
			<Skills />
			<WorkExperience />
			<Projects />
			<Certifications />
			<Profile prof={data.user} />
			<Footer />
			<Top />
		</div>
	);
}

async function getData() {
	const data = JSON.stringify({
		query: `
       {
         user(login:"rossreicks") {
           name
           bio
           isHireable
           avatarUrl
           location
           pinnedItems(first: 6, types: [REPOSITORY]) {
             totalCount
             edges {
                 node {
                   ... on Repository {
                     name
                     description
                     forkCount
                     stargazers {
                       totalCount
                     }
                     url
                     id
                     diskUsage
                     primaryLanguage {
                       name
                       color
                     }
                   }
                 }
               }
             }
           }
       }
       `,
	});

	const res = await fetch("https://api.github.com/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer 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`,
		},
		body: data,
	});

	return res.json();
}

export default App;
