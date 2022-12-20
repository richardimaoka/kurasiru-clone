import { css } from "@emotion/react";
import { graphql } from "../../libs/gql/gql";
import { RecipeComponentFragment } from "../../libs/gql/graphql";
import { Breadcrumb } from "../bradcrumb/Breadcrumb";
import { VideoComponent } from "../video/VideoComponent";
import { IngredientList } from "./IngredientListing";

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
      ...IngredientListing
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
            .contents {
              grid-column: 1 / 2;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 20px;
            `}
          >
            <VideoComponent fragment={recipe.video} />
            <IngredientList fragment={recipe.ingredients} />
          </div>
        </section>
      </main>
    </>
  );
};
