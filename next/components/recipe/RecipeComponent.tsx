import { graphql } from "../../libs/gql/gql";
import { RecipeComponentFragment } from "../../libs/gql/graphql";
import { Breadcrumb } from "../bradcrumb/Breadcrumb";
import { VideoComponent } from "../video/VideoComponent";

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
      ...VideoComponent
    }
  }
`);

export interface RecipeProps {
  recipe: RecipeComponentFragment;
}

export const RecipeComponent = ({ recipe }: RecipeProps): JSX.Element => {
  return (
    <>
      <Breadcrumb breadcrumbs={recipe.breadcrumbs} />
      {recipe.video ? <VideoComponent fragment={recipe.video} /> : <></>}
    </>
  );
};
