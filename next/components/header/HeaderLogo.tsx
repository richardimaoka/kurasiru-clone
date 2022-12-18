import { css } from "@emotion/react";

export const HeaderLogo = () => {
  return (
    <img
      css={css`
        display: block;
        padding-right: 20px;
      `}
      width="170"
      height="28"
      src="/images/kurashiru_logo.png"
    />
  );
};
