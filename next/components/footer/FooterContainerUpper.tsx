import { css } from "@emotion/react";

export const FooterContainerUpper = (): JSX.Element => {
  return (
    <footer
      css={css`
        background-color: #ededed;
      `}
    >
      <div
        css={css`
          margin: 0 auto;
          width: 1024px;
        `}
      >
        <img
          css={css`
            display: block;
            margin-top: 40px;
          `}
          width="1024"
          height="300"
          src="http://localhost:8090/images/footer-image.png"
        />
      </div>
    </footer>
  );
};
