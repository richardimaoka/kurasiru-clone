import { gql } from "@apollo/client";
import { css } from "@emotion/react";
import Link from "next/link";
import { BreadCrumbAncestorFragment } from "../../libs/gql/graphql";

export const fragmentBreadCrumbAncestor = gql`
  fragment BreadCrumbAncestor on BreadcrumbItem {
    name
    href
  }
`;

interface BreadcrumbAncestorProps {
  fragment: BreadCrumbAncestorFragment;
}

export const BreadcrumbAncestor = ({ fragment }: BreadcrumbAncestorProps) =>
  !fragment.href || !fragment.name ? (
    <></>
  ) : (
    <div>
      <Link
        css={css`
          color: #93918f;
          text-decoration: none;
          font-size: 14px;
          &:hover {
            border-bottom: 1px solid #b2b2b2;
          }
        `}
        href={fragment.href}
      >
        {fragment.name}
      </Link>
    </div>
  );
