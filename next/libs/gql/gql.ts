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
  "\n  fragment BreadCrumbAncestor on BreadcrumbItem {\n    name\n    href\n  }\n":
    types.BreadCrumbAncestorFragmentDoc,
  "\n  fragment DescriptionComponent_Fragment on Recipe {\n    id\n    title\n    subTitle\n    introduction\n    cookingTime\n    expense\n  }\n":
    types.DescriptionComponent_FragmentFragmentDoc,
  "\n  fragment IngredientElement on Ingredient {\n    item\n    amount\n  }\n":
    types.IngredientElementFragmentDoc,
  "\n  fragment IngredientListing on Ingredients {\n    servings\n    list {\n      ...IngredientElement\n    }\n  }\n":
    types.IngredientListingFragmentDoc,
  "\n  fragment RecipeComponent_Fragment on Recipe {\n    ...DescriptionComponent_Fragment\n    breadcrumbs {\n      ...BreadCrumbAncestor\n    }\n    ingredients {\n      ...IngredientListing\n    }\n    video {\n      ...VideoComponent\n    }\n  }\n":
    types.RecipeComponent_FragmentFragmentDoc,
  "\n  fragment VideoComponent on Video {\n    thumbnailUrl\n    source\n    type\n  }\n":
    types.VideoComponentFragmentDoc,
  "\n  query GetRecipe($recipeId: ID) {\n    recipe(id: $recipeId) {\n      ...RecipeComponent_Fragment\n    }\n  }\n":
    types.GetRecipeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment BreadCrumbAncestor on BreadcrumbItem {\n    name\n    href\n  }\n"
): typeof documents["\n  fragment BreadCrumbAncestor on BreadcrumbItem {\n    name\n    href\n  }\n"];
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
  source: "\n  fragment IngredientElement on Ingredient {\n    item\n    amount\n  }\n"
): typeof documents["\n  fragment IngredientElement on Ingredient {\n    item\n    amount\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment IngredientListing on Ingredients {\n    servings\n    list {\n      ...IngredientElement\n    }\n  }\n"
): typeof documents["\n  fragment IngredientListing on Ingredients {\n    servings\n    list {\n      ...IngredientElement\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment RecipeComponent_Fragment on Recipe {\n    ...DescriptionComponent_Fragment\n    breadcrumbs {\n      ...BreadCrumbAncestor\n    }\n    ingredients {\n      ...IngredientListing\n    }\n    video {\n      ...VideoComponent\n    }\n  }\n"
): typeof documents["\n  fragment RecipeComponent_Fragment on Recipe {\n    ...DescriptionComponent_Fragment\n    breadcrumbs {\n      ...BreadCrumbAncestor\n    }\n    ingredients {\n      ...IngredientListing\n    }\n    video {\n      ...VideoComponent\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment VideoComponent on Video {\n    thumbnailUrl\n    source\n    type\n  }\n"
): typeof documents["\n  fragment VideoComponent on Video {\n    thumbnailUrl\n    source\n    type\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetRecipe($recipeId: ID) {\n    recipe(id: $recipeId) {\n      ...RecipeComponent_Fragment\n    }\n  }\n"
): typeof documents["\n  query GetRecipe($recipeId: ID) {\n    recipe(id: $recipeId) {\n      ...RecipeComponent_Fragment\n    }\n  }\n"];

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
