import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "./graphql-intropect.json",
	documents: "./src/queries/**/*.ts",
	generates: {
		"./src/gql/client.ts": {
			plugins: [
				"typescript",
				"typescript-operations",
				"typescript-graphql-request",
			],
		},
	},
};

export default config;
