import React, { useState } from "react";
import {
  Wrapper,
  CollapseStyled,
  Header,
  Content,
  CompareList
} from "./App.styles";
import { Slider } from "./Slider/Slider";
import { useSlider } from "./Slider/hooks/useSlider";
import { TableHeader } from "./Table/TableHeader/TableHeader";
import { TableContent } from "./Table/TableContent/TableContent";
import { Fish } from "./Fish/Fish";

import { useIsIntersected } from "./hooks/useIsIntersected";

import { COMPARE_LIST } from "./stubs/compareList.stubs";
import { TABLE_LAYOUT } from "./constants/layouts";
import { TITLES } from "./constants/titles";

const itemWidth = 328;
export default function App() {
  const [list, setList] = useState(COMPARE_LIST);

  const {
    xyz,
    showPrevArrow,
    showNextArrow,
    mainContainerRef,
    indexState
  } = useSlider({
    itemWidth,
    count: list.length
  });
  const [activeIndex, setActiveIndex] = indexState;

  const { isIntersected, targetRef } = useIsIntersected();

  if (!list.length) {
    return <Wrapper>Список пуст</Wrapper>;
  }

  return (
    <Wrapper>
      Контент для проскролла (шапка сайта):
      <Fish />
      <CompareList>
        <div ref={targetRef} />
        <Header isSticked={isIntersected}>
          <Slider
            {...{ xyz, showPrevArrow, showNextArrow }}
            ref={mainContainerRef}
            onClickNext={() => setActiveIndex(prev => prev + 1)}
            onClickPrev={() => setActiveIndex(prev => prev - 1)}
          >
            <TableHeader
              itemWidth={itemWidth}
              items={list}
              onItemCloseClick={index => {
                if (index !== 0 && activeIndex === index) {
                  setActiveIndex(prev => prev - 1);
                }
                setList(prev => {
                  const next = [...prev];
                  next.splice(index, 1);
                  return next;
                });
              }}
            />
          </Slider>
        </Header>
        <Content>
          {TABLE_LAYOUT.groups.map(group => (
            <CollapseStyled
              title={TITLES[group.key]}
              key={`collapse-${group.key}`}
            >
              <TableContent
                itemWidth={itemWidth}
                items={list}
                layoutRows={group.values}
                xyz={xyz}
              />
            </CollapseStyled>
          ))}
          {TABLE_LAYOUT.groups.map(group => (
            <CollapseStyled
              title={TITLES[group.key]}
              key={`collapse-${group.key}`}
            >
              <TableContent
                itemWidth={itemWidth}
                items={list}
                layoutRows={group.values}
                xyz={xyz}
              />
            </CollapseStyled>
          ))}
          {TABLE_LAYOUT.groups.map(group => (
            <CollapseStyled
              title={TITLES[group.key]}
              key={`collapse-${group.key}`}
            >
              <TableContent
                itemWidth={itemWidth}
                items={list}
                layoutRows={group.values}
                xyz={xyz}
              />
            </CollapseStyled>
          ))}
        </Content>
      </CompareList>
      Футер:
      <Fish />
    </Wrapper>
  );
}
