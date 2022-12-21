import { AsideAdsComponent } from "./AsideAdsComponent";

export const AsideContainer = (): JSX.Element => {
  return (
    <section>
      <AsideAdsComponent />
      <div>人気ランキング</div>
      <div className="ranking-container">
        <div className="ranking-image">
          <img width="85" height="85" src="images/recipe-ranking1.jpg" />
        </div>
        <div className="ranking-info">
          <div className="ranking-position">1位</div>
          <div className="ranking-description">
            ここに料理の説明が入ると思われます
          </div>
          <div className="ranking-counts">
            <span className="views">閲覧数</span>
            <span className="view-num">10639</span>
            <span className="saves">保存数</span>
            <span className="save-num">1043</span>
          </div>
        </div>
        <div className="ranking-image">
          <img width="85" height="85" src="images/recipe-ranking2.jpg" />
        </div>
        <div className="ranking-info">
          <div className="ranking-position">2位</div>
          <div className="ranking-description">
            ここに料理の説明が入ると思われます
          </div>
          <div className="ranking-counts">
            <span className="views">閲覧数</span>
            <span className="view-num">10639</span>
            <span className="saves">保存数</span>
            <span className="save-num">1043</span>
          </div>
        </div>
        <div className="ranking-image">
          <img width="85" height="85" src="images/recipe-ranking3.jpg" />
        </div>
        <div className="ranking-info">
          <div className="ranking-position" v>
            3位
          </div>
          <div className="ranking-description">
            ここに料理の説明が入ると思われます
          </div>
          <div className="ranking-counts">
            <span className="views">閲覧数</span>
            <span className="view-num">10639</span>
            <span className="saves">保存数</span>
            <span className="save-num">1043</span>
          </div>
        </div>
        <div className="ranking-image">
          <img width="85" height="85" src="images/recipe-ranking4.jpg" />
        </div>
        <div className="ranking-info">
          <div className="ranking-position" v>
            4位
          </div>
          <div className="ranking-description">
            ここに料理の説明が入ると思われます
          </div>
          <div className="ranking-counts">
            <span className="views">閲覧数</span>
            <span className="view-num">10639</span>
            <span className="saves">保存数</span>
            <span className="save-num">1043</span>
          </div>
        </div>
        <div className="ranking-image">
          <img width="85" height="85" src="images/recipe-ranking5.jpg" />
        </div>
        <div className="ranking-info">
          <div className="ranking-position">5位</div>
          <div className="ranking-description">
            ここに料理の説明が入ると思われます
          </div>
          <div className="ranking-counts">
            <span className="views">閲覧数</span>
            <span className="view-num">10639</span>
            <span className="saves">保存数</span>
            <span className="save-num">1043</span>
          </div>
        </div>
      </div>
    </section>
  );
};
