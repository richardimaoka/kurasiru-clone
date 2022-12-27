import { css } from "@emotion/react";
import { FragmentType, graphql, useFragment } from "../../libs/gql";

const RecipeTaberepoCell_Fragment = graphql(`
  fragment RecipeTaberepoCell_Fragment on Taberepo {
    user {
      name
      pictureUrl
    }
    pictureUrl
    comment
    date
  }
`);

interface RecipeTaberepoCellProps {
  fragment: FragmentType<typeof RecipeTaberepoCell_Fragment>;
}

export const RecipeTaberepoCell = (
  props: RecipeTaberepoCellProps
): JSX.Element => {
  const fragment = useFragment(RecipeTaberepoCell_Fragment, props.fragment);
  const taberepoPictureUrl = fragment?.pictureUrl
    ? fragment.pictureUrl
    : "http://localhost/images/default-taberepo-picture.png";
  const userPictureUrl = fragment?.user?.pictureUrl
    ? fragment.user.pictureUrl
    : "http://localhost/images/default-user-picture.png";

  return (
    <div
      css={css`
        width: 208px;
      `}
    >
      <img
        css={css`
          display: block;
        `}
        width="208"
        height="208"
        src={taberepoPictureUrl}
      />
      <div>
        <img
          css={css`
            border-radius: 24px;
          `}
          width="48"
          height="48"
          src={userPictureUrl}
        />
      </div>
      <div
        css={css`
          font-size: 14px;
        `}
      >
        {fragment.comment}
      </div>
    </div>
  );
};
