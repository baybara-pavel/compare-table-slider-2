import styled, { css } from "styled-components";
import { Collapse } from "./Collapse/Collapse";
export const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  position: relative;
`;

export const CompareList = styled.div``;

export const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid #dfe1e5;
  /* margin-bottom: 24px; */
  background: #fff;

  ${({ isSticked }) =>
    isSticked
      ? css`
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        `
      : null};
`;

export const Content = styled.div`
  padding-top: 24px;
  position: relative;
`;

export const CollapseStyled = styled(Collapse)`
  margin-bottom: 32px;
`;
