import { css } from "@emotion/react";
import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";
import { DescriptionComponent } from "./DescriptionComponent";
import { IngredientListing } from "./IngredientListing";
import { RecipeTaberepoListing } from "./RecipeTaberepoListing";
import { RecipeTipsComponent } from "./RecipeTipsComponent";
import { StepListing } from "./StepListing";
import { VideoComponent } from "./VideoComponent";

const RecipeArticle_Fragment = graphql(`
  fragment RecipeArticle_Fragment on Recipe {
    ...DescriptionComponent_Fragment
    ingredients {
      ...IngredientListing_Fragment
    }
    video {
      ...VideoComponent_Fragment
    }
    ...StepListing_Fragment
    ...RecipeTipsComponent_Fragment
    ...RecipeTaberepoListing_Fragment
  }
`);

export interface RecipeProps {
  fragment: FragmentType<typeof RecipeArticle_Fragment>;
}

export const RecipeArticle = (props: RecipeProps): JSX.Element => {
  const fragment = useFragment(RecipeArticle_Fragment, props.fragment);
  return fragment.video && fragment.ingredients ? (
    <article>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 20px;
        `}
      >
        <VideoComponent fragment={fragment.video} />
        <DescriptionComponent fragment={fragment} />
        <IngredientListing fragment={fragment.ingredients} />
        <StepListing fragment={fragment} />
        <RecipeTipsComponent fragment={fragment} />
        <RecipeTaberepoListing fragment={fragment} />
      </div>
    </article>
  ) : (
    <></>
  );
};
