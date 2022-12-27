/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
  "\n  fragment BreadCrumbAncestor_Fragment on BreadcrumbItem {\n    name\n    href\n  }\n":
    types.BreadCrumbAncestor_FragmentFragmentDoc,
  "\n  fragment BreadcrumbContainer_Fragment on Recipe {\n    title\n    breadcrumbs {\n      ...BreadCrumbAncestor_Fragment\n    }\n  }\n":
    types.BreadcrumbContainer_FragmentFragmentDoc,
  "\n  fragment DescriptionComponent_Fragment on Recipe {\n    id\n    title\n    subTitle\n    introduction\n    cookingTime\n    expense\n  }\n":
    types.DescriptionComponent_FragmentFragmentDoc,
  "\n  fragment IngredientElement_Fragment on Ingredient {\n    item\n    amount\n  }\n":
    types.IngredientElement_FragmentFragmentDoc,
  "\n  fragment IngredientListing_Fragment on Ingredients {\n    servings\n    list {\n      ...IngredientElement_Fragment\n    }\n  }\n":
    types.IngredientListing_FragmentFragmentDoc,
  "\n  fragment RecipeArticle_Fragment on Recipe {\n    ...DescriptionComponent_Fragment\n    ingredients {\n      ...IngredientListing_Fragment\n    }\n    video {\n      ...VideoComponent_Fragment\n    }\n    ...StepListing_Fragment\n    ...RecipeTipsComponent_Fragment\n    taberepo {\n      ...RecipeTaberepoListing_Fragment\n    }\n  }\n":
    types.RecipeArticle_FragmentFragmentDoc,
  "\n  fragment RecipeGrid_Fragment on Recipe {\n    ...RecipeArticle_Fragment\n  }\n":
    types.RecipeGrid_FragmentFragmentDoc,
  "\n  fragment RecipeMainContainer_Fragment on Recipe {\n    ...RecipeGrid_Fragment\n  }\n":
    types.RecipeMainContainer_FragmentFragmentDoc,
  "\n  fragment RecipeTaberepoCell_Fragment on Taberepo {\n    user {\n      name\n      pictureUrl\n    }\n    pictureUrl\n    comment\n    date\n  }\n":
    types.RecipeTaberepoCell_FragmentFragmentDoc,
  "\n  fragment RecipeTaberepoGrid_Fragment on TaberepoListing {\n    numReports\n    list {\n      ...RecipeTaberepoCell_Fragment\n    }\n  }\n":
    types.RecipeTaberepoGrid_FragmentFragmentDoc,
  "\n  fragment RecipeTaberepoListing_Fragment on TaberepoListing {\n    ...TaberepoStarsComponent_Fragment\n    numReports\n    numReviews\n    ...RecipeTaberepoGrid_Fragment\n  }\n":
    types.RecipeTaberepoListing_FragmentFragmentDoc,
  "\n  fragment RecipeTipsComponent_Fragment on Recipe {\n    tips\n  }\n":
    types.RecipeTipsComponent_FragmentFragmentDoc,
  "\n  fragment StepElement_Fragment on Step {\n    description\n  }\n":
    types.StepElement_FragmentFragmentDoc,
  "\n  fragment StepListing_Fragment on Recipe {\n    steps {\n      ...StepElement_Fragment\n    }\n  }\n":
    types.StepListing_FragmentFragmentDoc,
  "\n  fragment TaberepoStarsComponent_Fragment on TaberepoListing {\n    stars\n  }\n":
    types.TaberepoStarsComponent_FragmentFragmentDoc,
  "\n  fragment VideoComponent_Fragment on Video {\n    thumbnailUrl\n    source\n    type\n  }\n":
    types.VideoComponent_FragmentFragmentDoc,
  "\n  query GetRecipe($recipeId: ID) {\n    recipe(id: $recipeId) {\n      ...RecipeMainContainer_Fragment\n      ...BreadcrumbContainer_Fragment\n    }\n  }\n":
    types.GetRecipeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment BreadCrumbAncestor_Fragment on BreadcrumbItem {\n    name\n    href\n  }\n"
): typeof documents["\n  fragment BreadCrumbAncestor_Fragment on BreadcrumbItem {\n    name\n    href\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment BreadcrumbContainer_Fragment on Recipe {\n    title\n    breadcrumbs {\n      ...BreadCrumbAncestor_Fragment\n    }\n  }\n"
): typeof documents["\n  fragment BreadcrumbContainer_Fragment on Recipe {\n    title\n    breadcrumbs {\n      ...BreadCrumbAncestor_Fragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment DescriptionComponent_Fragment on Recipe {\n    id\n    title\n    subTitle\n    introduction\n    cookingTime\n    expense\n  }\n"
): typeof documents["\n  fragment DescriptionComponent_Fragment on Recipe {\n    id\n    title\n    subTitle\n    introduction\n    cookingTime\n    expense\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment IngredientElement_Fragment on Ingredient {\n    item\n    amount\n  }\n"
): typeof documents["\n  fragment IngredientElement_Fragment on Ingredient {\n    item\n    amount\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment IngredientListing_Fragment on Ingredients {\n    servings\n    list {\n      ...IngredientElement_Fragment\n    }\n  }\n"
): typeof documents["\n  fragment IngredientListing_Fragment on Ingredients {\n    servings\n    list {\n      ...IngredientElement_Fragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment RecipeArticle_Fragment on Recipe {\n    ...DescriptionComponent_Fragment\n    ingredients {\n      ...IngredientListing_Fragment\n    }\n    video {\n      ...VideoComponent_Fragment\n    }\n    ...StepListing_Fragment\n    ...RecipeTipsComponent_Fragment\n    taberepo {\n      ...RecipeTaberepoListing_Fragment\n    }\n  }\n"
): typeof documents["\n  fragment RecipeArticle_Fragment on Recipe {\n    ...DescriptionComponent_Fragment\n    ingredients {\n      ...IngredientListing_Fragment\n    }\n    video {\n      ...VideoComponent_Fragment\n    }\n    ...StepListing_Fragment\n    ...RecipeTipsComponent_Fragment\n    taberepo {\n      ...RecipeTaberepoListing_Fragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment RecipeGrid_Fragment on Recipe {\n    ...RecipeArticle_Fragment\n  }\n"
): typeof documents["\n  fragment RecipeGrid_Fragment on Recipe {\n    ...RecipeArticle_Fragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment RecipeMainContainer_Fragment on Recipe {\n    ...RecipeGrid_Fragment\n  }\n"
): typeof documents["\n  fragment RecipeMainContainer_Fragment on Recipe {\n    ...RecipeGrid_Fragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment RecipeTaberepoCell_Fragment on Taberepo {\n    user {\n      name\n      pictureUrl\n    }\n    pictureUrl\n    comment\n    date\n  }\n"
): typeof documents["\n  fragment RecipeTaberepoCell_Fragment on Taberepo {\n    user {\n      name\n      pictureUrl\n    }\n    pictureUrl\n    comment\n    date\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment RecipeTaberepoGrid_Fragment on TaberepoListing {\n    numReports\n    list {\n      ...RecipeTaberepoCell_Fragment\n    }\n  }\n"
): typeof documents["\n  fragment RecipeTaberepoGrid_Fragment on TaberepoListing {\n    numReports\n    list {\n      ...RecipeTaberepoCell_Fragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment RecipeTaberepoListing_Fragment on TaberepoListing {\n    ...TaberepoStarsComponent_Fragment\n    numReports\n    numReviews\n    ...RecipeTaberepoGrid_Fragment\n  }\n"
): typeof documents["\n  fragment RecipeTaberepoListing_Fragment on TaberepoListing {\n    ...TaberepoStarsComponent_Fragment\n    numReports\n    numReviews\n    ...RecipeTaberepoGrid_Fragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment RecipeTipsComponent_Fragment on Recipe {\n    tips\n  }\n"
): typeof documents["\n  fragment RecipeTipsComponent_Fragment on Recipe {\n    tips\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment StepElement_Fragment on Step {\n    description\n  }\n"
): typeof documents["\n  fragment StepElement_Fragment on Step {\n    description\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment StepListing_Fragment on Recipe {\n    steps {\n      ...StepElement_Fragment\n    }\n  }\n"
): typeof documents["\n  fragment StepListing_Fragment on Recipe {\n    steps {\n      ...StepElement_Fragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TaberepoStarsComponent_Fragment on TaberepoListing {\n    stars\n  }\n"
): typeof documents["\n  fragment TaberepoStarsComponent_Fragment on TaberepoListing {\n    stars\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment VideoComponent_Fragment on Video {\n    thumbnailUrl\n    source\n    type\n  }\n"
): typeof documents["\n  fragment VideoComponent_Fragment on Video {\n    thumbnailUrl\n    source\n    type\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetRecipe($recipeId: ID) {\n    recipe(id: $recipeId) {\n      ...RecipeMainContainer_Fragment\n      ...BreadcrumbContainer_Fragment\n    }\n  }\n"
): typeof documents["\n  query GetRecipe($recipeId: ID) {\n    recipe(id: $recipeId) {\n      ...RecipeMainContainer_Fragment\n      ...BreadcrumbContainer_Fragment\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 **/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
