import { css } from "@emotion/react";

interface FooterMenuItemProps {
  name: string;
  // href: string;
}

export const FooterMenuItem = ({ name }: FooterMenuItemProps): JSX.Element => {
  return (
    <div
      css={css`
        font-size: 13px;
        color: #635f5a;
        margin-bottom: 13px;
      `}
    >
      {name}
    </div>
  );
};
