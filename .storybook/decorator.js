import React from 'react';
import styled from 'styled-components';

const DecoratorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  > * {
    margin: .25rem;
  }
`;

const FlexColumn = styled.div`
  flex-direction: column;
`

export const centerDecorator = story => (
  <DecoratorWrapper>
    {story()}
  </DecoratorWrapper>
);

export const columnDecorator = story => (
  <FlexColumn>
    {story()}
  </FlexColumn>
)
