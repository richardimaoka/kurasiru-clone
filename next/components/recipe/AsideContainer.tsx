import { AsideAdsComponent } from "./AsideAdsComponent";
import { AsideRankingConponent } from "./AsideRankingConponent";

export const AsideContainer = (): JSX.Element => {
  return (
    <section>
      <AsideAdsComponent />
      <AsideRankingConponent />
    </section>
  );
};
