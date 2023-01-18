import { ApolloError } from "@apollo/client";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FooterContainerLower } from "../../components/footer/FooterContainerLower";
import { FooterContainerUpper } from "../../components/footer/FooterContainerUpper";
import { Header } from "../../components/header/Header";
import { client } from "../../libs/apolloClient";
import { graphql } from "../../libs/gql/gql";
import { GetRecipeQuery } from "../../libs/gql/graphql";

const GET_RECIPE = graphql(`
  query GetRecipe($recipeId: ID) {
    recipe(id: $recipeId) {
      id
    }
  }
`);

const notFoundError = (error: any): boolean => {
  return (
    error instanceof ApolloError &&
    error.graphQLErrors.find((gqlError) =>
      gqlError.message.includes("not found")
    ) !== undefined
  );
};

interface RecipeIdParams extends ParsedUrlQuery {
  recipe_id: string;
}

export const getServerSideProps: GetServerSideProps<
  GetRecipeQuery,
  RecipeIdParams
> = async (context) => {
  console.log("getServerSideProps from [recipe_id].tsx");

  if (!context.params) {
    throw Error("Could not get query parameters from URL");
  }

  try {
    const { data } = await client.query({
      query: GET_RECIPE,
      variables: {
        recipeId: context.params.recipe_id,
      },
    });
    return { props: { ...data } };
  } catch (error) {
    if (notFoundError(error)) {
      return {
        notFound: true,
      };
    } else if (error instanceof ApolloError) {
      console.log("---------------------------------");
      console.log(GET_RECIPE);
      console.log(error.clientErrors);
      console.log(error.networkError);
      console.log(error.graphQLErrors);
      throw Error("internal server error");
    } else {
      console.log("---------------------------------");
      console.log(error);
      throw Error("internal server error");
    }
  }
};

type RecipePageProps = GetRecipeQuery;

const RecipePage = ({ recipe }: RecipePageProps) => {
  return recipe ? (
    <>
      <Header />
      <main class="main">
        <section class="contents">
          <div class="recipe-container">
            <video
              width="560"
              height="560"
              preload="auto"
              poster="images/humberg-thumbnail.jpg"
              controls={true}
              controlsList="nodownload"
              muted={true}
              class="native"
              data-v-2932eb4e=""
            >
              <source
                src="videos/humburg.mp4"
                type="video/mp4"
                data-v-049f9628=""
              />
              <p data-v-049f9628="">
                動画を再生するには、videoタグをサポートしたブラウザが必要です。
              </p>
            </video>

            <div class="recipe-description">
              <div class="recipe-title">
                チーズイン 煮込みハンバーグ　レシピ・作り方
              </div>
              <div class="recipe-title-caption">
                「チーズイン
                煮込みハンバーグ」の作り方を簡単で分かりやすいレシピ動画で紹介しています。
              </div>
              <div class="recipe-description">
                とろーりチーズが美味しい、チーズイン煮込みハンバーグのご紹介です。ソースはデミグラスソースとカットトマト缶を使うことで、コクがありながらもあっさりといただけますよ。お好みできのこや、生のトマトを加えても美味しくいただけます。お好きな野菜などを加えてアレンジしてお楽しみくださいね。
              </div>
              <div>調理時間：30分</div>
              <div>費用目安：500円前後</div>
              <button class="recipe-save-button">保存する</button>
            </div>

            <div class="ingredients">
              <div>
                <span>材料</span>
                <span>(2人前)</span>
              </div>

              <div class="ingredient">
                <div>牛豚合びき肉</div>
                <div>250g</div>
              </div>
              <div class="ingredient">
                <div>玉ねぎ</div>
                <div>100g</div>
              </div>
              <div class="ingredient">
                <div>ベビーチーズ</div>
                <div>4個</div>
              </div>
              <div class="ingredient">
                <div>卵 (Mサイズ)</div>
                <div>1個</div>
              </div>
              <div class="ingredient">
                <div>パン粉 (生)</div>
                <div>大さじ2</div>
              </div>
              <div class="ingredient">
                <div>牛乳</div>
                <div>大さじ1</div>
              </div>
              <div class="ingredient">
                <div>(A)ナツメグ</div>
                <div>小さじ1</div>
              </div>
              <div class="ingredient">
                <div>(A)塩こしょう</div>
                <div>小さじ1/4</div>
              </div>
              <div class="ingredient">
                <div>サラダ油</div>
                <div>大さじ1</div>
              </div>
              <div class="ingredient">
                <div>デミグラスソース</div>
                <div>200g</div>
              </div>
              <div class="ingredient">
                <div>カットトマト缶</div>
                <div>100g</div>
              </div>
              <div class="ingredient">
                <div>生クリーム</div>
                <div>20ml</div>
              </div>
              <div class="ingredient">
                <div>有塩バター</div>
                <div>20g</div>
              </div>
              <div class="ingredient">
                <div>赤ワイン</div>
                <div>大さじ2</div>
              </div>
              <div class="ingredient">
                <div>ウスターソース</div>
                <div>大さじ1</div>
              </div>
              <div class="ingredient">
                <div>生クリーム</div>
                <div>適量</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterContainerUpper />
      <FooterContainerLower />
    </>
  ) : (
    <></>
  );
};

export default RecipePage;
