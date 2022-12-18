import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../gqlgen/schema.gql",
  documents: "pages/*.tsx",
  generates: {
    "libs/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
