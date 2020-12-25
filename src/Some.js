import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textColor};
  width: 380px;
  margin: 100px;
  padding: 20px;
  height: 263px;
  left: 64px;
  top: 62px;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
`;

export const Some = (props) => {
  return (
    <Div>
      <h5>another custom div right here</h5>
    </Div>
  );
};
