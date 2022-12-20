import { css } from "@emotion/react";
import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";
import { Breadcrumb } from "../bradcrumb/Breadcrumb";
import { DescriptionComponent } from "./DescriptionComponent";
import { IngredientList } from "./IngredientListing";
import { VideoComponent } from "./VideoComponent";

const RecipeComponent_Fragment = graphql(`
  fragment RecipeComponent on Recipe {
    ...DescriptionComponent_Fragment
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
            {/* {recipe.video ? <VideoComponent fragment={recipe.video} /> : <></>} */}
            <VideoComponent fragment={recipe.video} />
            <DescriptionComponent fragment={recipe} />
            <IngredientList fragment={recipe.ingredients} />
          </div>
        </section>
      </main>
    </>
  );
};
