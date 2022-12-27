import { css } from "@emotion/react";
import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";
import { TaberepoStar } from "./TaberepoStar";

const TaberepoStarsComponent_Fragment = graphql(`
  fragment TaberepoStarsComponent_Fragment on TaberepoListing {
    stars
  }
`);

interface TaberepoStarsComponentProps {
  fragment: FragmentType<typeof TaberepoStarsComponent_Fragment>;
}

export const TaberepoStarsComponent = (
  props: TaberepoStarsComponentProps
): JSX.Element => {
  const fragment = useFragment(TaberepoStarsComponent_Fragment, props.fragment);
  return fragment.stars ? (
    <div
      css={css`
        display: flex;
      `}
    >
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
      <div
        css={css`
          margin-left: 4px;
          line-height: 20px;
          font-size: 20px;
          font-weight: 700;
        `}
      >
        {fragment.stars.toFixed(1)}
      </div>
    </div>
  ) : (
    <></>
  );
};
