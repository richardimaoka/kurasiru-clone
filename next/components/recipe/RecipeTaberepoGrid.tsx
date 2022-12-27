import { css } from "@emotion/react";
import { FragmentType, graphql, useFragment } from "../../libs/gql";
import { RecipeTaberepoCell } from "./RecipeTaberepoCell";

const RecipeTaberepoGrid_Fragment = graphql(`
  fragment RecipeTaberepoGrid_Fragment on TaberepoListing {
    numReports
    list {
      ...RecipeTaberepoCell_Fragment
    }
  }
`);

interface RecipeTaberepoGridProps {
  fragment: FragmentType<typeof RecipeTaberepoGrid_Fragment>;
}

export const RecipeTaberepoGrid = (
  props: RecipeTaberepoGridProps
): JSX.Element => {
  const fragment = useFragment(RecipeTaberepoGrid_Fragment, props.fragment);

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: auto auto auto;
      `}
    >
      {fragment.list &&
        fragment.list.map(
          (taberepo, index) =>
            taberepo && <RecipeTaberepoCell key={index} fragment={taberepo} />
        )}
    </div>
  );
};
