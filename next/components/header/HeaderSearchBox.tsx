import { css } from "@emotion/react";

export const HeaderSearchBox = () => {
  return (
    <input
      css={css`
        display: block;
        flex-basis: 200px;
        flex-grow: 1;
        text-indent: 10px;
        border-width: 1px;
        border-color: #c0c0c0;
        border-style: solid;
        border-radius: 4px;
        height: 32px;
        background-color: #f0f0f0;
      `}
      placeholder="料理名・食材でレシピを探す"
    />
  );
};
