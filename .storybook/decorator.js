import React from 'react';
import styled from 'styled-components';

const DecoratorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  > * {
    margin: 4px;
  }
`;

export const centerDecorator = story => (
  <DecoratorWrapper>
    {story()}
  </DecoratorWrapper>
);