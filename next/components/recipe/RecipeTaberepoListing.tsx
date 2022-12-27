import { css } from "@emotion/react";
import { FragmentType, graphql, useFragment } from "../../libs/gql";
import { TaberepoStarsComponent } from "./TaberepoStarsComponent";

const RecipeTaberepoListing_Fragment = graphql(`
  fragment RecipeTaberepoListing_Fragment on TaberepoListing {
    ...TaberepoStarsComponent_Fragment
    numReports
    numReviews
    list {
      user {
        name
        pictureUrl
      }
      pictureUrl
      comment
      date
    }
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
      <p
        css={css`
          margin-bottom: 20px;
        `}
      ></p>
    </div>
  );
};
