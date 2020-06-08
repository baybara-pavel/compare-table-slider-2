import styled from "styled-components";
import { Item } from "../Table.styles";

export const Wrapper = styled.div`
  display: flex;
`;

export const Cross = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Order = styled.div`
  color: #9fa6a9;
  margin-bottom: 8px;
`;

export const ItemStyled = styled(Item)`
  padding-top: 32px;
  padding-bottom: 24px;
`;
