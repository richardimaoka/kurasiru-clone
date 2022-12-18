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
      RecipePage
    </div>
  );
};

export default RecipePage;
