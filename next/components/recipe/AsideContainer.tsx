import { AsideAdsComponent } from "./AsideAdsComponent";
import { AsideRankingConponent } from "./AsideRankingConponent";

export const AsideContainer = (): JSX.Element => {
  return (
    <aside>
      <AsideAdsComponent />
      <AsideRankingConponent />
    </aside>
  );
};
