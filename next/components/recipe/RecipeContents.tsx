import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";
import { BreadcrumbContainer } from "../bradcrumb/BreadcrumbContainer";
import { RecipeMainContainer } from "./RecipeMainContainer";

const RecipeContents_Fragment = graphql(`
  fragment RecipeContents_Fragment on Recipe {
    ...BreadcrumbContainer_Fragment
    ...RecipeMainContainer_Fragment
  }
`);

export interface RecipeProps {
  fragment: FragmentType<typeof RecipeContents_Fragment>;
}

export const RecipeContents = (props: RecipeProps): JSX.Element => {
  const fragment = useFragment(RecipeContents_Fragment, props.fragment);
  return (
    <>
      <BreadcrumbContainer fragment={fragment} />
      <RecipeMainContainer fragment={fragment} />
    </>
  );
};
