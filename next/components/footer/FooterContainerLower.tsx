import { css } from "@emotion/react";
import { FooterMenu } from "./FooterMenu";

export const FooterContainerLower = (): JSX.Element => {
  return (
    <footer
      css={css`
        background-color: white;
      `}
    >
      <div
        css={css`
          max-width: 1020px;
          margin: 0px auto;
        `}
      >
        <FooterMenu />
      </div>
    </footer>
  );
};
