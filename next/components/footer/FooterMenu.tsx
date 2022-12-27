import { css } from "@emotion/react";
import { FooterMenuColumnTitle } from "./FooterMenuColumnTitle";
import { FooterMenuItem } from "./FooterMenuItem";

export const FooterMenu = (): JSX.Element => {
  const footerMenuImageColumnStyle = css`
    margin-right: 100px;
  `;
  const footerMenuColumnStyle = css`
    margin-right: 48px;
  `;

  return (
    <div
      css={css`
        margin: 30px 0px;
        display: flex;
      `}
    >
      <div css={footerMenuImageColumnStyle}>
        <img
          width="170"
          height="28"
          src="http://localhost:8090/images/kurashiru_logo.png"
        />
      </div>
      <div css={footerMenuColumnStyle}>
        <FooterMenuColumnTitle title="カテゴリ一覧" />
        <FooterMenuItem name="材料で探す" />
        <FooterMenuItem name="メニューから探す" />
      </div>
      <div css={footerMenuColumnStyle}>
        <FooterMenuColumnTitle title="メニュー" />
        <FooterMenuItem name="トップ" />
        <FooterMenuItem name="レシピリスト" />
        <FooterMenuItem name="コラム一覧" />
        <FooterMenuItem name="ピックアップ一覧" />
        <FooterMenuItem name="カテゴリ一覧" />
        <FooterMenuItem name="キーワード一覧" />
      </div>
      <div css={footerMenuColumnStyle}>
        <FooterMenuColumnTitle title="クラシルについて" />
        <FooterMenuItem name="運営会社" />
        <FooterMenuItem name="利用規約" />
        <FooterMenuItem name="プライバシーポリシー" />
        <FooterMenuItem name="おいしく安全に料理を楽しむために" />
        <FooterMenuItem name="行動ターゲティング広告について" />
        <FooterMenuItem name="特定商取引法に基づく表記" />
        <FooterMenuItem name="サービスに関してのお問い合わせ" />
        <FooterMenuItem name="よくある質問" />
      </div>
      <div css={footerMenuColumnStyle}>
        <FooterMenuColumnTitle title="クラシルのサービス" />
        <FooterMenuItem name="クラシルチラシ" />
      </div>
    </div>
  );
};
