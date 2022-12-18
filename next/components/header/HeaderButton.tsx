import { css } from "@emotion/react";

interface HeaderButtonProps {
  name: string;
}

export const HeaderButton = ({ name }: HeaderButtonProps) => {
  return (
    <div>
      <button
        css={css`
          display: block;
          height: 32px;
          background-color: white;
          border-width: 1px;
          border-style: solid;
          border-color: #c0c0c0;
          border-radius: 4px;
          color: #635f5a;
          font-size: 14px;
          padding: 0px 12px;
        `}
      >
        {name}
      </button>
    </div>
  );
};
