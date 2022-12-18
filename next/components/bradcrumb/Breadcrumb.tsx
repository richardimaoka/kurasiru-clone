import { css } from "@emotion/react";
import { BreadcrumbAncestor } from "./BreadcrumbAncestor";
import { BreadcrumbCurrent } from "./BreadcrumbCurrent";
import { BreadcrumbGreaterThan } from "./BreadcrumbGreaterThan";

export const Breadcrumb = () => (
  <section
    css={css`
      background-color: white;
      height: 32px;
      border-bottom: 1px solid #d5d2cd;
      margin-bottom: 10px;
    `}
  >
    <div
      css={css`
        display: flex;
        column-gap: 10px;
        width: 1020px;
        margin: 0 auto;
      `}
    >
      <BreadcrumbAncestor name="クラシル" href="https://google.com" />
      <BreadcrumbGreaterThan />
      <BreadcrumbAncestor name="材料で探す" href="https://google.com" />
      <BreadcrumbGreaterThan />
      <BreadcrumbAncestor name="野菜" href="https://google.com" />
      <BreadcrumbGreaterThan />
      <BreadcrumbAncestor name="夏野菜" href="https://google.com" />
      <BreadcrumbGreaterThan />
      <BreadcrumbAncestor name="トマト" href="https://google.com" />
      <BreadcrumbGreaterThan />
      <BreadcrumbCurrent name="ズッキーニとチキンのトマト煮込み" />
    </div>
  </section>
);
