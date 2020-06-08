import React from "react";
import { Wrapper, Cross, ItemStyled, Order } from "./TableHeader.styles";

export function TableHeader({ itemWidth = 100, items = [], onItemCloseClick }) {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <ItemStyled key={item.id} itemWidth={itemWidth}>
          <Cross onClick={() => onItemCloseClick(index)}>x</Cross>
          <Order>{`${index + 1}/${items.length}`}</Order>
          {item.title}
        </ItemStyled>
      ))}
    </Wrapper>
  );
}
