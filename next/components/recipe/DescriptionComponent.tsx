import { css } from "@emotion/react";
import { FragmentType, graphql, useFragment } from "../../libs/gql";

export const DescriptionComponent_Fragment = graphql(`
  fragment DescriptionComponent_Fragment on Recipe {
    id
    title
    subTitle
    introduction
    cookingTime
    expense
  }
`);

interface DescriptionComponentProps {
  fragment: FragmentType<typeof DescriptionComponent_Fragment>;
}

export const DescriptionComponent = (
  props: DescriptionComponentProps
): JSX.Element => {
  const fragment = useFragment(DescriptionComponent_Fragment, props.fragment);
  return (
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
  );
};
