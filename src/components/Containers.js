import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textColor};
  margin: 20px;
  padding: 20px;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.4));
`;

export const Row = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Col = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
