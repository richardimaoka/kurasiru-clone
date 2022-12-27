import { css } from "@emotion/react";
import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";
import { RecipeGrid } from "./RecipeGrid";

const RecipeMainContainer_Fragment = graphql(`
  fragment RecipeMainContainer_Fragment on Recipe {
    ...RecipeGrid_Fragment
  }
`);

export interface RecipeProps {
  fragment: FragmentType<typeof RecipeMainContainer_Fragment>;
}

export const RecipeMainContainer = (props: RecipeProps): JSX.Element => {
  const fragment = useFragment(RecipeMainContainer_Fragment, props.fragment);
  return (
    <main
      css={css`
        background-color: white;
      `}
    >
      <div
        css={css`
          width: 980px;
          margin: 0 auto;
        `}
      >
        <RecipeGrid fragment={fragment} />
      </div>
    </main>
  );
};
