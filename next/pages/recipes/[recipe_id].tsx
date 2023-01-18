import { ApolloError } from "@apollo/client";
import { css } from "@emotion/react";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FooterContainerLower } from "../../components/footer/FooterContainerLower";
import { FooterContainerUpper } from "../../components/footer/FooterContainerUpper";
import { Header } from "../../components/header/Header";
import { IngredientListing } from "../../components/recipe/IngredientListing";
import { VideoComponent } from "../../components/recipe/VideoComponent";
import { client } from "../../libs/apolloClient";
import { graphql } from "../../libs/gql/gql";
import { GetRecipeQuery } from "../../libs/gql/graphql";

const GET_RECIPE = graphql(`
  query GetRecipe($recipeId: ID) {
    recipe(id: $recipeId) {
      id
      video {
        ...VideoComponent_Fragment
      }
      ingredients {
        ...IngredientListing_Fragment
      }
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
      <main
        css={css`
          display: grid;
          justify-content: center;
          grid-template-columns: 680px 300px;
          column-gap: 40px;
          background-color: white;
        `}
      >
        <section
          css={css`
            grid-column: 1 / 2;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 20px;
            `}
          >
            {/* `recipe.video &&` がちょっと無理やり感あり */}
            {recipe.video && <VideoComponent fragment={recipe.video} />}

            <div
              css={css`
                margin-bottom: 20px;
              `}
            >
              <div
                css={css`
                  font-size: 22px;
                  font-weight: 700;
                `}
              >
                チーズイン 煮込みハンバーグ　レシピ・作り方
              </div>
              <div
                css={css`
                  font-size: 12px;
                  margin-bottom: 20px;
                  color: #635f5a;
                `}
              >
                「チーズイン
                煮込みハンバーグ」の作り方を簡単で分かりやすいレシピ動画で紹介しています。
              </div>
              <div
                css={css`
                  margin-bottom: 20px;
                `}
              >
                とろーりチーズが美味しい、チーズイン煮込みハンバーグのご紹介です。ソースはデミグラスソースとカットトマト缶を使うことで、コクがありながらもあっさりといただけますよ。お好みできのこや、生のトマトを加えても美味しくいただけます。お好きな野菜などを加えてアレンジしてお楽しみくださいね。
              </div>
              <div>調理時間：30分</div>
              <div>費用目安：500円前後</div>
              <button
                css={css`
                  width: 300px;
                  height: 50px;
                  font-size: 14px;
                  font-weight: 700;
                  background-color: f0efef;
                  border: none;
                  border-radius: 25px;
                `}
              >
                保存する
              </button>
            </div>

            {recipe.ingredients && (
              <IngredientListing fragment={recipe.ingredients} />
            )}
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
