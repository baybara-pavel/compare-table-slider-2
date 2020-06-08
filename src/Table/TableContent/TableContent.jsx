import React from "react";
import { Item } from "../Table.styles";
import { Wrapper, Title, Row, RowInner } from "./TableContent.styles";
import { TITLES } from "../../constants/titles";
import { Slider } from "../../Slider/Slider";

export function TableContent({ itemWidth = 100, items = [], layoutRows, xyz }) {
  return (
    <Wrapper>
      {layoutRows.map(key => (
        <Row key={key}>
          <Title>{TITLES[key]}</Title>
          <Slider xyz={xyz} showArrows={false}>
            <RowInner>
              {items.map(item => {
                return (
                  <Item
                    itemWidth={itemWidth}
                    key={`${item.id}${item.attributes[key]}`}
                  >
                    {item.attributes[key]}
                  </Item>
                );
              })}
            </RowInner>
          </Slider>
        </Row>
      ))}
    </Wrapper>
  );
}
