import { ApolloError, gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { client } from "../../libs/apolloClient";
import { GetRecipeQuery } from "../../libs/gql/graphql";
import { css } from "@emotion/react";

const GET_RECIPE = gql`
  query GetRecipe($recipeId: ID) {
    recipe(id: $recipeId) {
      id
      title
      subTitle
      introduction
      cookingTime
      ingredients {
        servings
        list {
          item
          amount
        }
      }
    }
  }
`;

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
    const { data } = await client.query<GetRecipeQuery>({
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
    } else {
      throw Error("internal server error");
    }
  }
};

const RecipePage = (props: GetRecipeQuery) => {
  console.log(props);

  // const router = useRouter();
  // const { recipe_id } = router.query;
  // const { loading, error, data } = useQuery(GET_RECIPE, {
  //   variables: { recipeId: recipe_id },
  // });

  // if (loading) return <p>Loading...</p>;
  // if (error) {
  //   if (
  //     error.graphQLErrors.length == 1 &&
  //     error.graphQLErrors[0].message.includes("not found")
  //   ) {
  //     return;
  //   }
  //   console.log("-----networkError------------");
  //   console.log(error.networkError);
  //   console.log("-----graphQLErrors------------");
  //   console.log(error.graphQLErrors);
  //   return <p>Error : {error.message}</p>;
  // }

  // console.log(data);

  return (
    <div
      css={css`
        background-color: black;
      `}
    >
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
          <img
            css={css`
              display: block;
              padding-right: 20px;
            `}
            width="170"
            height="28"
            src="images/kurashiru_logo.png"
          />
          <div
            css={css`
              color: #635f5a;
              font-weight: 700;
            `}
          >
            カテゴリ一覧
          </div>
          <div
            css={css`
              color: #635f5a;
              font-weight: 700;
            `}
          >
            レシピを読む
          </div>
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
          <div>
            <button
              css={css`
                display: block;
                height: 32px;
                background-color: white;
                border-width: 1px;
                border-style: solid;
                border-color: #c0c0c0;
                border-radius: 4px;
                color: #635f5a;
                font-size: 14px;
                padding: 0px 12px;
              `}
            >
              招待コードを使う
            </button>
          </div>
          <div>
            <button
              css={css`
                display: block;
                height: 32px;
                background-color: white;
                border-width: 1px;
                border-style: solid;
                border-color: #c0c0c0;
                border-radius: 4px;
                color: #635f5a;
                font-size: 14px;
                padding: 0px 12px;
              `}
            >
              無料会員登録
            </button>
          </div>
          <div>
            <button
              css={css`
                display: block;
                height: 32px;
                background-color: white;
                border-width: 1px;
                border-style: solid;
                border-color: #c0c0c0;
                border-radius: 4px;
                color: #635f5a;
                font-size: 14px;
                padding: 0px 12px;
              `}
            >
              ログイン
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default RecipePage;
