import { gql, useQuery } from "@apollo/client";

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

const Child = () => {
  const { loading, error, data } = useQuery(GET_RECIPE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return <div>Child</div>;
};

export default function Home() {
  return <Child />;
}
