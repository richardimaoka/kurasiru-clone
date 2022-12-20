import { css } from "@emotion/react";
import { FragmentType, graphql, useFragment } from "../../libs/gql";

const StepElement_Fragment = graphql(`
  fragment StepElement_Fragment on Step {
    description
  }
`);

interface StepElementProps {
  fragment: FragmentType<typeof StepElement_Fragment>;
  stepNum: number;
}

export const StepElement = (props: StepElementProps): JSX.Element => {
  const fragment = useFragment(StepElement_Fragment, props.fragment);
  const stepNum = props.stepNum;
  return (
    <li
      css={css`
        display: flex;
        column-gap: 10px;
        padding: 10px 0px;
        border-bottom: solid 1px #f4f2f0;
        font-size: 17px;
        line-height: 25px;
      `}
    >
      <div>{stepNum}</div>
      <div>{fragment.description}</div>
    </li>
  );
};
