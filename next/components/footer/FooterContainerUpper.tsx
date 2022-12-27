import { css } from "@emotion/react";

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <div>
        <section
          css={css`
            margin-top: 40px;
            background-color: #ededed;
          `}
        >
          <img
            css={css`
              display: block;
              margin: 0 auto;
            `}
            width="1024"
            height="300"
            src="images/footer-image.png"
          />
        </section>
      </div>
    </footer>
  );
};
