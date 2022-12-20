import { css } from "@emotion/react";
import { graphql } from "../../libs/gql/gql";
import { IngredientElementFragment } from "../../libs/gql/graphql";

graphql(`
  fragment IngredientElement on Ingredient {
    item
    amount
  }
`);

export interface IngredientElementProps {
  fragment: IngredientElementFragment;
}

export const IngredientElement = ({
  fragment,
}: IngredientElementProps): JSX.Element => {
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
