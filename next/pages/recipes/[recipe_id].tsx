import {
  ApolloClient,
  ApolloError,
  gql,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { client } from "../../libs/apolloClient";

interface RecipeIdParams extends ParsedUrlQuery {
  recipe_id: string;
}

interface ReturnType {
  a: string;
}
export const getServerSideProps: GetServerSideProps<
  ReturnType,
  RecipeIdParams
> = async (context) => {
  console.log("getServerSideProps from [recipe_id].tsx");
  console.log(context.params);

  if (!context.params) {
    throw Error("Could not get query parameters from URL");
  }

  try {
    const { data } = await client.query({
      query: gql`
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
      `,

      variables: {
        recipeId: context.params.recipe_id,
      },
    });

    return {
      props: {
        a: "wack",
      },
    };
  } catch (error) {
    if (
      error instanceof ApolloError &&
      error.graphQLErrors.find((gqlError) =>
        gqlError.message.includes("not found")
      )
    )
      return {
        notFound: true,
      };
    else throw Error("internal server error");
  }
};

const Recipe = () => {
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

  return <div>Recipe</div>;
};

export default Recipe;
