import { ApolloError, gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Breadcrumb } from "../../components/bradcrumb/Breadcrumb";
import { Header } from "../../components/header/Header";
import { client } from "../../libs/apolloClient";
import { GetRecipeQuery } from "../../libs/gql/graphql";

const GET_RECIPE = gql`
  query GetRecipe($recipeId: ID) {
    recipe(id: $recipeId) {
      id
      title
      subTitle
      introduction
      cookingTime
      breadcrumbs {
        name
        href
      }
      ingredients {
        servings
        list {
          item
          amount
          __typename
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
    } else if (error instanceof ApolloError) {
      console.log("---------------------------------");
      console.log(GET_RECIPE);
      console.log(error.clientErrors);
      console.log(error.networkError);
      console.log(error.graphQLErrors);
      return { notFound: true };
      throw Error("internal server error");
    } else {
      console.log("---------------------------------");
      console.log(error);
      throw Error("internal server error");
    }
  }
};

const RecipePage = ({ recipe }: GetRecipeQuery) => {
  console.log(recipe?.breadcrumbs);
  return (
    <>
      <Header />
      <Breadcrumb breadcrumbs={recipe?.breadcrumbs} />
    </>
  );
};

export default RecipePage;
