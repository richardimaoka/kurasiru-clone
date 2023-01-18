import { ApolloError } from "@apollo/client";
import { css } from "@emotion/react";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FooterContainerLower } from "../../components/footer/FooterContainerLower";
import { FooterContainerUpper } from "../../components/footer/FooterContainerUpper";
import { Header } from "../../components/header/Header";
import { DescriptionComponent } from "../../components/recipe/DescriptionComponent";
import { IngredientListing } from "../../components/recipe/IngredientListing";
import { VideoComponent } from "../../components/recipe/VideoComponent";
import { client } from "../../libs/apolloClient";
import { graphql } from "../../libs/gql/gql";
import { GetRecipeQuery } from "../../libs/gql/graphql";

const VideoComponent_Fragment = graphql(`
  fragment VideoComponent_Fragment on Video {
    thumbnailUrl
    source
    type
  }
`);
const GET_RECIPE = graphql(`
  query GetRecipe($recipeId: ID) {
    recipe(id: $recipeId) {
      id
      video {
        ...VideoComponent_Fragment
      }
      ...DescriptionComponent_Fragment
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
            {recipe.video && <VideoComponent video={recipe.video} />}

            <DescriptionComponent fragment={recipe} />

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
