import { Breadcrumb } from "../bradcrumb/Breadcrumb";
import { Recipe, RecipeComponentFragment } from "../../libs/gql/graphql";
import { graphql } from "../../libs/gql/gql";

graphql(`
  fragment RecipeComponent on Recipe {
    id
    title
    subTitle
    introduction
    cookingTime
    breadcrumbs {
      ...BreadCrumbAncestor
    }
    ingredients {
      servings
      list {
        item
        amount
        __typename
      }
    }
    video {
      thumbnailUrl
      source
      type
    }
  }
`);

export interface RecipeProps {
  recipe: RecipeComponentFragment;
}

export const RecipeComponent = ({ recipe }: RecipeProps): JSX.Element => {
  return <Breadcrumb breadcrumbs={recipe.breadcrumbs} />;
};
