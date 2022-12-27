import { css } from "@emotion/react";

interface FooterMenuColumnTitleProps {
  title: string;
  // href: string;
}

export const FooterMenuColumnTitle = ({
  title,
}: FooterMenuColumnTitleProps): JSX.Element => {
  return (
    <div
      css={css`
        font-size: 13px;
        font-weight: 700;
        margin-bottom: 20px;
      `}
    >
      {title}
    </div>
  );
};
