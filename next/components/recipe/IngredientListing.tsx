import { css } from "@emotion/react";
import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";
import { IngredientElement } from "./IngredientElement";

const IngredientListing_Fragment = graphql(`
  fragment IngredientListing_Fragment on Ingredients {
    servings
    list {
      ...IngredientElement_Fragment
    }
  }
`);

export interface IngredientsListingProps {
  fragment: FragmentType<typeof IngredientListing_Fragment>;
}

export const IngredientList = (props: IngredientsListingProps): JSX.Element => {
  const fragment = useFragment(IngredientListing_Fragment, props.fragment);
  return fragment.list ? (
    <div
      css={css`
        margin-top: 40px;
      `}
    >
      <div
        css={css`
          padding-bottom: 8px;
        `}
      >
        <span
          css={css`
            font-weight: 700;
            font-size: 20px;
            line-height: 20px;
          `}
        >
          材料
        </span>
        <span
          css={css`
            margin-left: 8px;
            font-size: 14px;
          `}
        >
          ({fragment.servings})
        </span>
      </div>
      {fragment.list.map((ingredient) =>
        !ingredient ? <></> : <IngredientElement fragment={ingredient} />
      )}
    </div>
  ) : (
    <></>
  );
};
