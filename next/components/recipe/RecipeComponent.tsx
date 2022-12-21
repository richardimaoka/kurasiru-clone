import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";
import { BreadcrumbContainer } from "../bradcrumb/BreadcrumbContainer";
import { RecipeMainContainer } from "./RecipeMainContainer";

const RecipeComponent_Fragment = graphql(`
  fragment RecipeComponent_Fragment on Recipe {
    ...BreadcrumbContainer_Fragment
    ...RecipeMainContainer_Fragment
  }
`);

export interface RecipeProps {
  recipe: FragmentType<typeof RecipeComponent_Fragment>;
}

export const RecipeComponent = (props: RecipeProps): JSX.Element => {
  const recipe = useFragment(RecipeComponent_Fragment, props.recipe);
  return (
    <>
      <BreadcrumbContainer fragment={recipe} />
      <RecipeMainContainer fragment={recipe} />
    </>
  );
};
