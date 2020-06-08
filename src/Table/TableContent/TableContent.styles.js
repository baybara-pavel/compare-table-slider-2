import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.div`
  position: absolute;
  top: 20px;
  left: 40px;
  color: #9fa6a9;
`;
export const Row = styled.div`
  position: relative;
  padding-top: 46px;
  padding-bottom: 24px;
  display: flex;
  &:nth-child(odd) {
    background: #f5f6f7;
  }
`;
export const RowInner = styled.div`
  display: flex;
`;
