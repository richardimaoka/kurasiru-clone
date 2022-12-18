import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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

const Recipe = () => {
  const router = useRouter();
  const { recipe_id } = router.query;
  const { loading, error, data } = useQuery(GET_RECIPE, {
    variables: { recipeId: recipe_id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return <div>Recipe</div>;
};

export default Recipe;
