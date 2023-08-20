import { gql } from "graphql-request";

export const Get_Github_User = gql`
	query GetGithubUser($username: String!) {
		user(login: $username) {
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
			contributionsCollection {
				contributionCalendar {
					totalContributions
					weeks {
						contributionDays {
							contributionCount
							date
						}
					}
				}
			}
		}
	}
`;
