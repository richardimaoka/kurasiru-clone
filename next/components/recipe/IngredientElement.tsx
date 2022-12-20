import { css } from "@emotion/react";
import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";

const IngredientElement_Fragment = graphql(`
  fragment IngredientElement_Fragment on Ingredient {
    item
    amount
  }
`);

export interface IngredientElementProps {
  fragment: FragmentType<typeof IngredientElement_Fragment>;
}

export const IngredientElement = (
  props: IngredientElementProps
): JSX.Element => {
  const fragment = useFragment(IngredientElement_Fragment, props.fragment);
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        padding: 10px 0px;
        border-bottom: solid 1px #f4f2f0;
      `}
    >
      <div
        css={css`
          font-size: 17px;
        `}
      >
        {fragment.item}
      </div>
      <div>{fragment.amount}</div>
    </div>
  );
};
