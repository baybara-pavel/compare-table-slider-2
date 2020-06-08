import React from "react";

import { Wrapper } from "./Arrow.styles";
export function Arrow({ onClick, children, className }) {
  return (
    <Wrapper onClick={onClick} className={className}>
      {children}
    </Wrapper>
  );
}
