import { css } from "@emotion/react";
import { FragmentType, useFragment } from "../../libs/gql";
import { graphql } from "../../libs/gql/gql";
import { StepElement } from "./StepElement";

const StepListing_Fragment = graphql(`
  fragment StepListing_Fragment on Recipe {
    steps {
      ...StepElement_Fragment
    }
  }
`);

export interface StepsListingProps {
  fragment: FragmentType<typeof StepListing_Fragment>;
}

export const StepListing = (props: StepsListingProps): JSX.Element => {
  const fragment = useFragment(StepListing_Fragment, props.fragment);
  return (
    <div>
      <div
        css={css`
          font-size: 20px;
          font-weight: 700;
        `}
      >
        作り方
      </div>
      <ol
        css={css`
          list-style-type: none;
          padding-inline-start: 0px;
        `}
      >
        {fragment.steps?.map((step, index) =>
          step ? (
            <StepElement key={index} fragment={step} stepNum={index} />
          ) : (
            <></>
          )
        )}
      </ol>
    </div>
  );
};
