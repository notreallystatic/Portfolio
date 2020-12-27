import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils';

export const H1 = styled.h1`
  font-size: ${typeScale.header1};
  color: ${(props) => props.theme.textColor};
`;

export const H2 = styled.h2`
  font-size: ${typeScale.header2};
  color: ${(props) => props.theme.textColor};
`;

export const H3 = styled.h3`
  font-size: ${typeScale.header3};
  color: ${(props) => props.theme.textColor};
`;

export const H4 = styled.h4`
  font-size: ${typeScale.header4};
  color: ${(props) => props.theme.textColor};
`;

export const H5 = styled.h5`
  font-size: ${typeScale.header5};
  color: ${(props) => props.theme.textColor};
`;

export const H6 = styled.h6`
  font-size: ${typeScale.header6};
  color: ${(props) => props.theme.textColor};
`;

export const Paragraph = styled.p`
  font-size: ${typeScale.pargraph};
  color: ${(props) => props.theme.textColor};
`;

export const HelperText = styled.p`
  font-size: ${typeScale.helperText};
  color: ${(props) => props.theme.textColor};
`;

export const CopyrightText = styled.p`
  font-size: ${typeScale.copyrightText};
  color: ${(props) => props.theme.textColor};
`;
