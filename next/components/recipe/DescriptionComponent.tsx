import { css } from "@emotion/react";
import { Maybe, RecipeComponentFragment } from "../../libs/gql/graphql";

interface DescriptionComponentProps {
  fragment?: Maybe<RecipeComponentFragment>;
}

export const DescriptionComponent = ({
  fragment,
}: DescriptionComponentProps): JSX.Element => {
  return fragment ? (
    <div
      css={css`
        margin-bottom: 20px;
      `}
    >
      <div
        css={css`
          font-size: 22px;
          font-weight: 700;
        `}
      >
        {fragment.title}　レシピ・作り方
      </div>
      <div
        css={css`
          font-size: 12px;
          margin-bottom: 20px;
        `}
      >
        「{fragment.title}
        」の作り方を簡単でわかりやすいレシピ動画で紹介しています。
      </div>
      <div
        css={css`
          margin-bottom: 20px;
        `}
      >
        {fragment.introduction}
      </div>
      <div>調理時間：{fragment.cookingTime}</div>
      <div>費用目安：{fragment.expense}</div>
    </div>
  ) : (
    <></>
  );
};
