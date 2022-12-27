import { css } from "@emotion/react";
import { FragmentType, graphql, useFragment } from "../../libs/gql";
import { TaberepoStar } from "./TaberepoStar";

const RecipeTaberepoListing_Fragment = graphql(`
  fragment RecipeTaberepoListing_Fragment on TaberepoListing {
    stars
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
          padding: 8px;
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
        <div
          css={css`
            display: flex;
          `}
        >
          {fragment.stars ? (
            <div
              css={css`
                display: flex;
                gap: 2px;
              `}
            >
              <TaberepoStar nthStar={1} score={fragment.stars} />
              <TaberepoStar nthStar={2} score={fragment.stars} />
              <TaberepoStar nthStar={3} score={fragment.stars} />
              <TaberepoStar nthStar={4} score={fragment.stars} />
              <TaberepoStar nthStar={5} score={fragment.stars} />
            </div>
          ) : (
            <></>
          )}
          <div
            css={css`
              margin-left: 4px;
              line-height: 20px;
              font-size: 20px;
              font-weight: 700;
            `}
          >
            4.6
          </div>
        </div>
      </div>
      <p
        css={css`
          margin-bottom: 20px;
        `}
      ></p>
    </div>
  );
};
