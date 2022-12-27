import { css } from "@emotion/react";
import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";
import { AsideContainer } from "./AsideContainer";
import { RecipeArticle } from "./RecipeArticle";

const RecipeGrid_Fragment = graphql(`
  fragment RecipeGrid_Fragment on Recipe {
    ...RecipeArticle_Fragment
  }
`);

export interface RecipeProps {
  fragment: FragmentType<typeof RecipeGrid_Fragment>;
}

export const RecipeGrid = (props: RecipeProps): JSX.Element => {
  const fragment = useFragment(RecipeGrid_Fragment, props.fragment);
  return (
    <div
      css={css`
        display: grid;
        justify-content: center;
        grid-template-columns: 680px 300px;
        column-gap: 40px;
      `}
    >
      <div
        css={css`
          grid-column: 1 / 2;
        `}
      >
        <RecipeArticle fragment={fragment} />
      </div>
      <div
        css={css`
          grid-column: 2 / 2;
        `}
      >
        <AsideContainer />
      </div>
    </div>
  );
};
