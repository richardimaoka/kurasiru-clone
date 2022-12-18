import { ApolloError, gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { client } from "../../libs/apolloClient";
import { GetRecipeQuery } from "../../libs/gql/graphql";
import { css } from "@emotion/react";
import { HeaderLogo } from "../../components/header/HeaderLogo";
import { HeaderMenuItem } from "../../components/header/HeaderMenuItem";
import { HeaderSearchBox } from "../../components/header/HeaderSearchBox";
import { HeaderButton } from "../../components/header/HeaderButton";

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
          <HeaderMenuItem name="カテゴリ一覧" />
          <HeaderMenuItem name="レシピを読む" />
          <HeaderSearchBox />
          <HeaderButton name="招待コードを使う" />
          <HeaderButton name="無料会員登録" />
          <HeaderButton name="ログイン" />
        </div>
      </div>
    </header>
  );
};

export default RecipePage;
