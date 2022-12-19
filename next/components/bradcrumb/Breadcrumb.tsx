import { css } from "@emotion/react";
import React from "react";
import { BreadcrumbItem } from "../../libs/gql/graphql";
import { BreadcrumbAncestor } from "./BreadcrumbAncestor";
import { BreadcrumbCurrent } from "./BreadcrumbCurrent";
import { BreadcrumbGreaterThan } from "./BreadcrumbGreaterThan";

export interface BreadcrumbProps {
  breadcrumbs: (BreadcrumbItem | null)[] | null | undefined;
}

export const Breadcrumb = ({ breadcrumbs }: BreadcrumbProps) =>
  !breadcrumbs ? (
    <></>
  ) : (
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
        {breadcrumbs.map((b, index) =>
          b && b.name && b.href ? (
            <React.Fragment key={index}>
              <BreadcrumbAncestor name={b.name} href={b.href} />
              <BreadcrumbGreaterThan />
            </React.Fragment>
          ) : (
            <></>
          )
        )}
        <BreadcrumbCurrent name="ズッキーニとチキンのトマト煮込み" />
      </div>
    </section>
  );
