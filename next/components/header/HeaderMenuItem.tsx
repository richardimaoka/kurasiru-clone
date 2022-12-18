import { css } from "@emotion/react";

interface HeaderMenuItemProps {
  name: string;
}

export const HeaderMenuItem = ({ name }: HeaderMenuItemProps) => {
  return (
    <div
      css={css`
        color: #635f5a;
        font-weight: 700;
      `}
    >
      {name}
    </div>
  );
};
