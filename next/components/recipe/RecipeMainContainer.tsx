import { css } from "@emotion/react";
import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";
import { DescriptionComponent } from "./DescriptionComponent";
import { IngredientListing } from "./IngredientListing";
import { StepListing } from "./StepListing";
import { VideoComponent } from "./VideoComponent";

const RecipeMainContainer_Fragment = graphql(`
  fragment RecipeMainContainer_Fragment on Recipe {
    ...DescriptionComponent_Fragment
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
  fragment: FragmentType<typeof RecipeMainContainer_Fragment>;
}

export const RecipeMainContainer = (props: RecipeProps): JSX.Element => {
  const fragment = useFragment(RecipeMainContainer_Fragment, props.fragment);
  return (
    <>
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
            {fragment.video ? (
              <VideoComponent fragment={fragment.video} />
            ) : (
              <></>
            )}
            <DescriptionComponent fragment={fragment} />
            {fragment.ingredients ? (
              <IngredientListing fragment={fragment.ingredients} />
            ) : (
              <></>
            )}
            <StepListing fragment={fragment} />
          </div>
        </section>
      </main>
    </>
  );
};
