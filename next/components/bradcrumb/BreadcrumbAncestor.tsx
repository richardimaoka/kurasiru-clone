import { css } from "@emotion/react";

interface BreadcrumbAncestorProps {
  name: string;
  href: string;
}

export const BreadcrumbAncestor = ({ name, href }: BreadcrumbAncestorProps) => (
  <div>
    <a
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
    </a>
  </div>
);
