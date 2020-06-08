import styled from "styled-components";
import { Arrow } from "./Arrow/Arrow";

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

export const ArrowWrapper = styled(Arrow)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

export const ArrowPrev = styled(ArrowWrapper)`
  left: 16px;
`;

export const ArrowNext = styled(ArrowWrapper)`
  right: 16px;
`;
