import styled, { css } from "styled-components";
export const Item = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0 40px;
  flex-grow: 0;
  flex-shrink: 0;

  text-align: left;

  ${({ itemWidth }) =>
    itemWidth !== undefined && itemWidth !== null
      ? css`
          width: ${itemWidth}px;
        `
      : null}
`;
