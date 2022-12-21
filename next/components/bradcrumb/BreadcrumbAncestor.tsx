import { css } from "@emotion/react";
import Link from "next/link";
import { FragmentType, graphql, useFragment } from "../../libs/gql";

export const BreadCrumbAncestor_Fragment = graphql(`
  fragment BreadCrumbAncestor_Fragment on BreadcrumbItem {
    name
    href
  }
`);

export interface BreadcrumbAncestorProps {
  fragment: FragmentType<typeof BreadCrumbAncestor_Fragment>;
}

export const BreadcrumbAncestor = (props: BreadcrumbAncestorProps) => {
  const fragment = useFragment(BreadCrumbAncestor_Fragment, props.fragment);
  return !fragment.href || !fragment.name ? (
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
};
