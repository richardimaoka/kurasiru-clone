import { css } from "@emotion/react";
import { HeaderButton } from "./HeaderButton";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenuItem } from "./HeaderMenuItem";
import { HeaderSearchBox } from "./HeaderSearchBox";

export const Header = () => {
  return (
    <header
      css={css`
        background-color: white;
        height: 64px;
        border-bottom: 1px solid #d5d2cd;
        box-shadow: 0px 2px 3px #f0f0f0;
        margin-bottom: 10px;
      `}
    >
      <div
        css={css`
          display: flex;
          margin: 0 auto;
          padding: 10px 0px;
          max-width: 1340px;
          min-width: 1040px;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        `}
      >
        <HeaderLogo />
        <HeaderMenuItem name="カテゴリ一覧" />
        <HeaderMenuItem name="レシピを読む" />
        <HeaderSearchBox />
        <HeaderButton name="招待コードを使う" />
        <HeaderButton name="無料会員登録" />
        <HeaderButton name="ログイン" />
      </div>
    </header>
  );
};
