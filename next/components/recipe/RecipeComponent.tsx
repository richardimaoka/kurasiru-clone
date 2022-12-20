import { css } from "@emotion/react";
import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";
import { Breadcrumb } from "../bradcrumb/Breadcrumb";
import { DescriptionComponent } from "./DescriptionComponent";
import { IngredientListing } from "./IngredientListing";
import { StepListing } from "./StepListing";
import { VideoComponent } from "./VideoComponent";

const RecipeComponent_Fragment = graphql(`
  fragment RecipeComponent_Fragment on Recipe {
    ...DescriptionComponent_Fragment
    breadcrumbs {
      ...BreadCrumbAncestor
    }
    ingredients {
      ...IngredientListing_Fragment
    }
    video {
      ...VideoComponent_Fragment
    }
    ...StepListing_Fragment
  }
`);

export interface RecipeProps {
  recipe: FragmentType<typeof RecipeComponent_Fragment>;
}

export const RecipeComponent = (props: RecipeProps): JSX.Element => {
  const recipe = useFragment(RecipeComponent_Fragment, props.recipe);
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
            {recipe.video ? <VideoComponent fragment={recipe.video} /> : <></>}
            <DescriptionComponent fragment={recipe} />
            {recipe.ingredients ? (
              <IngredientListing fragment={recipe.ingredients} />
            ) : (
              <></>
            )}
            <StepListing fragment={recipe} />
          </div>
        </section>
      </main>
    </>
  );
};
