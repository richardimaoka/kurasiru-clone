import { css } from "@emotion/react";

interface BreadcrumbCurrentProps {
  name: string;
}

export const BreadcrumbCurrent = ({ name }: BreadcrumbCurrentProps) => (
  <div>
    <a
      css={css`
        color: black;
        text-decoration: none;
        font-size: 14px;
      `}
      href=""
    >
      {name}
    </a>
  </div>
);
