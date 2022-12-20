import { css } from "@emotion/react";
import { graphql } from "../../libs/gql/gql";
import { IngredientListingFragment, Maybe } from "../../libs/gql/graphql";
import { IngredientElement } from "./IngredientElement";

graphql(`
  fragment IngredientListing on Ingredients {
    servings
    list {
      ...IngredientElement
    }
  }
`);

export interface IngredientsListingProps {
  fragment?: Maybe<IngredientListingFragment>;
}

export const IngredientList = ({
  fragment,
}: IngredientsListingProps): JSX.Element => {
  return fragment && fragment.list ? (
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
