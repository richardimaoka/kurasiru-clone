import { css } from "@emotion/react";
import { FragmentType, graphql, useFragment } from "../../libs/gql";

const RecipeTaberepoListing_Fragment = graphql(`
  fragment RecipeTaberepoListing_Fragment on Recipe {
    taberepo {
      numReports
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
          <div
            css={css`
              display: flex;
            `}
          >
            <img
              css={css`
                display: block;
                margin-left: 2px;
                width: 20px;
              `}
              width="20"
              height="18.438"
              src="http://localhost:8090/images/star-full.svg"
            />
            <img
              css={css`
                display: block;
                margin-left: 2px;
                width: 20px;
              `}
              width="20"
              height="18.438"
              src="http://localhost:8090/images/star-full.svg"
            />
            <img
              css={css`
                display: block;
                margin-left: 2px;
                width: 20px;
              `}
              width="20"
              height="18.438"
              src="http://localhost:8090/images/star-full.svg"
            />
            <img
              css={css`
                display: block;
                margin-left: 2px;
                width: 20px;
              `}
              width="20"
              height="18.438"
              src="http://localhost:8090/images/star-full.svg"
            />
            <img
              css={css`
                display: block;
                margin-left: 2px;
                width: 20px;
              `}
              width="20"
              height="18.438"
              src="http://localhost:8090/images/star-half.svg"
            />
          </div>
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
