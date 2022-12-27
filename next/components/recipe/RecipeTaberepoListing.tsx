import { css } from "@emotion/react";
import { FragmentType, graphql, useFragment } from "../../libs/gql";
import { RecipeTaberepoGrid } from "./RecipeTaberepoGrid";
import { TaberepoStarsComponent } from "./TaberepoStarsComponent";

const RecipeTaberepoListing_Fragment = graphql(`
  fragment RecipeTaberepoListing_Fragment on TaberepoListing {
    ...TaberepoStarsComponent_Fragment
    numReports
    numReviews
    ...RecipeTaberepoGrid_Fragment
  }
`);

interface RecipeTaberepoListingProps {
  fragment: FragmentType<typeof RecipeTaberepoListing_Fragment>;
}

export const RecipeTaberepoListing = (
  props: RecipeTaberepoListingProps
): JSX.Element => {
  const fragment = useFragment(RecipeTaberepoListing_Fragment, props.fragment);
  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            line-height: 20px;
            font-size: 20px;
            font-weight: 700;
          `}
        >
          たべれぽ
        </div>
        <TaberepoStarsComponent fragment={fragment} />
      </div>
      <div
        css={css`
          margin-top: 8px;
          text-align: right;
          font-size: 12px;
        `}
      >
        496件のレビュー
      </div>
      <RecipeTaberepoGrid fragment={fragment} />
    </div>
  );
};
