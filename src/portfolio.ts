/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
	username: "Ross Reicks",
	title: "Hi all, I'm Ross",
	subTitle: emoji("Software Engineer 👨‍💻 | Tech Enthusiast 📊 | Father 👨‍👧‍👦"),
	resumeLink:
		"https://drive.google.com/file/d/1BZZ3kohIRD656FHCderaEWorwqheA7n9/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
	github: "https://github.com/rossreicks",
	linkedin: "https://www.linkedin.com/in/ross-reicks-b2aa3591",
	gmail: "rreicks13@gmail.com",
};

// Your Skills Section

const skillsSection = {
	title: "What i do",
	subTitle: "CREATING SOFTWARE SOLUTIONS TO SAVE PEOPLE TIME AND MONEY.",
	skills: [
		emoji(
			"⚡ Architecting and developing highly scalable and performant applications"
		),
		emoji(
			"⚡ Developing highly interactive Frontend / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Deploying highly available and secure applications on the cloud"
		),
		emoji(
			"⚡ Bring a product from idea to production using the latest technologies"
		),
	],

	softwareSkills: [
		{
			skillName: "AWS",
			classname: "logos:aws",
			style: {
				backgroundColor: "transparent",
			},
		},
		{
			skillName: "Node",
			classname: "logos:nodejs",
			style: {
				backgroundColor: "transparent",
			},
		},
		{
			skillName: "React",
			classname: "simple-icons:react",
			style: {
				color: "#61DAFB",
			},
		},
	],
};

// Your top 3 work experiences

const workExperiences = {
	viewExperiences: true, //Set it to true to show workExperiences Section
	experience: [
		{
			role: "Senior Software Engineer",
			company: "Tractor Zoom",
			companylogo: "/images/tz.png",
			companyColor: "darkgrey",
			date: "March 2021 - Present",
			desc: "Championed data platform, led compliance, and drove product enhancements at an industry innovator.",
			descBullets: [
				"Architected robust data ingestion platform for accuracy",
				"Guided SOC2 compliance initiative successfully",
				"Developed performant search APIs using Elastic Search.",
			],
		},
		{
			role: "Cloud Engineer",
			company: "John Deere",
			companylogo: "/images/John-Deere-Green.png",
			companyColor: "#367C2B",
			date: "December 2019 - March 2021",
			desc: "Led microservices transition, serverless solutions, and cross-team collaboration at a leading manufacturer.",
			descBullets: [
				"Orchestrated Kubernetes migration for scalable applications",
				"Designed GraphQL layer for efficient client-backend communication",
				"Spearheaded serverless notification system using AWS",
			],
		},
		{
			role: "Junior Software Engineer",
			company: "John Deere",
			companylogo: "/images/John-Deere-Logo.png",
			companyColor: "#FFCB05",
			date: "May 2018 - December 2019",
			desc: "Modernized software, mentored analysts, and optimized productivity at a global equipment company.",
			descBullets: [
				"Revitalized WinForms app with REST-based architecture",
				"Transformed legacy Desktop application to Angular web client",
				"Led Agile ceremonies, boosting team performance",
			],
		},
	],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
	display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
	certifications: [
		{
			title: "AWS Certified Developer",
			subtitle: "- Associate",
			logo_path: "associate.jpg",
			certificate_link:
				"https://www.credly.com/badges/1e470ae9-bdc9-4ec9-b61c-4e77a7330123/public_url",
			alt_name: "AWS Certified Developer - Associate",
			color_code: "#F6EAEA",
		},
	],
};

const contactInfo = {
	title: emoji("Contact Me ☎️"),
	subtitle:
		"Discuss a project or just want to say hi? My Inbox is open for all.",
	email_address: "rreicks13@gmail.com",
};

export {
	greeting,
	socialMediaLinks,
	skillsSection,
	workExperiences,
	openSource,
	contactInfo,
	certifications,
};
