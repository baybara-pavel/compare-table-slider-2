import React from "react";
import { Wrapper, Control, Content } from "./Collapse.styles";
export const Collapse = ({ title, children, className }) => {
  return (
    <Wrapper className={className}>
      <Control>{title}</Control>
      <Content>{children}</Content>
    </Wrapper>
  );
};
