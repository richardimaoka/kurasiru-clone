import { css } from "@emotion/react";

interface TaberepoStarProps {
  score: number;
  nthStar: number;
}

export const TaberepoStar = ({
  score,
  nthStar,
}: TaberepoStarProps): JSX.Element => {
  const fraction = 0.01;

  let imgSrc: string;
  if (score < nthStar - 1 - fraction) {
    imgSrc = "";
  } else if (nthStar - 1 - fraction <= score && score <= nthStar - fraction) {
    imgSrc = "http://localhost:8090/images/star-half.svg";
  } else {
    // nthStar - fraction < score
    imgSrc = "http://localhost:8090/images/star-full.svg";
  }

  return (
    <img
      css={css`
        display: block;
        width: 20px;
      `}
      width="20"
      height="18.438"
      src={imgSrc}
    />
  );
};
