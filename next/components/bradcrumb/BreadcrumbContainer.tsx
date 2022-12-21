import { css } from "@emotion/react";
import React from "react";
import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";
import { BreadcrumbAncestor } from "./BreadcrumbAncestor";
import { BreadcrumbCurrent } from "./BreadcrumbCurrent";
import { BreadcrumbGreaterThan } from "./BreadcrumbGreaterThan";

const BreadcrumbContainer_Fragment = graphql(`
  fragment BreadcrumbContainer_Fragment on Recipe {
    title
    breadcrumbs {
      ...BreadCrumbAncestor_Fragment
    }
  }
`);

export interface BreadcrumbContainerProps {
  fragment: FragmentType<typeof BreadcrumbContainer_Fragment>;
}

export const BreadcrumbContainer = (props: BreadcrumbContainerProps) => {
  const fragment = useFragment(BreadcrumbContainer_Fragment, props.fragment);

  return fragment.breadcrumbs && fragment.title ? (
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
        {fragment.breadcrumbs.map((b, index) =>
          b ? (
            <React.Fragment key={index}>
              <BreadcrumbAncestor fragment={b} />
              <BreadcrumbGreaterThan />
            </React.Fragment>
          ) : (
            <></>
          )
        )}
        <BreadcrumbCurrent name={fragment.title} />
      </div>
    </section>
  ) : (
    <></>
  );
};
