import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../gqlgen/schema.gql",
  documents: "pages/**/*.tsx",
  generates: {
    "libs/gql/": {
      preset: "client",
      plugins: [],
    },
  },
  watch: ["pages/**/*.tsx", "../gqlgen/schema.gql"],
  hooks: { afterOneFileWrite: ["npx prettier --write"] },
};

export default config;
