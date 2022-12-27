import { css } from "@emotion/react";
import { FragmentType, graphql, useFragment } from "../../libs/gql";

const RecipeTaberepoListing_Fragment = graphql(`
  fragment RecipeTaberepoListing_Fragment on Recipe {
    tips
  }
`);

interface RecipeTipsProps {
  fragment: FragmentType<typeof RecipeTaberepoListing_Fragment>;
}

export const RecipeTipsComponent = (props: RecipeTipsProps): JSX.Element => {
  const fragment = useFragment(RecipeTaberepoListing_Fragment, props.fragment);
  return (
    <div>
      <div
        css={css`
          font-size: 22px;
          font-weight: 700;
        `}
      >
        料理のコツ・ポイント
      </div>
      <p
        css={css`
          margin-bottom: 20px;
        `}
      >
        {fragment.tips}
      </p>
    </div>
  );
};
