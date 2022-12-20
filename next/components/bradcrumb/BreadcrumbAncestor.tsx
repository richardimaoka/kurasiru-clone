import { css } from "@emotion/react";
import Link from "next/link";

interface BreadcrumbAncestorProps {
  name: string;
  href: string;
}

export const BreadcrumbAncestor = ({ name, href }: BreadcrumbAncestorProps) => (
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
      href={href}
    >
      {name}
    </Link>
  </div>
);
