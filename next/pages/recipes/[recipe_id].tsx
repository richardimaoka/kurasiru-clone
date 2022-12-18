import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const GET_RECIPE = gql`
  query GetRecipe {
    recipe(id: "f488a1b0-9a53-4bbb-8c9c-e4e880f998ab") {
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
  const { loading, error, data } = useQuery(GET_RECIPE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return <div>Recipe</div>;
};

export default Recipe;
