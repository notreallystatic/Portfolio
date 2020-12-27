import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  CopyrightText,
  HelperText,
} from './components';

export const Some = (props) => {
  return (
    <>
      <Container>
        <Row style={{ justifyContent: 'space-around' }}>
          <Container
            style={{
              background: 'orangered',
              minHeight: '50px',
              minWidth: '50px',
            }}
          ></Container>
          <Container
            style={{
              background: 'orangered',
              minHeight: '50px',
              minWidth: '50px',
            }}
          ></Container>
          <Container
            style={{
              background: 'orangered',
              minHeight: '50px',
              minWidth: '50px',
            }}
          ></Container>
          <Container
            style={{
              background: 'orangered',
              minHeight: '50px',
              minWidth: '50px',
            }}
          ></Container>
          <Container
            style={{
              background: 'orangered',
              minHeight: '50px',
              minWidth: '50px',
            }}
          ></Container>
          <Container
            style={{
              background: 'orangered',
              minHeight: '50px',
              minWidth: '50px',
            }}
          ></Container>
          <Container
            style={{
              background: 'orangered',
              minHeight: '50px',
              minWidth: '50px',
            }}
          ></Container>
          <Container
            style={{
              background: 'orangered',
              minHeight: '50px',
              minWidth: '50px',
            }}
          ></Container>
        </Row>
      </Container>
      <Container>
        <H1>This is a level one heading.</H1>
        <H2>This is a level two heading.</H2>
        <H3>This is a level three heading.</H3>
        <H4>This is a level four heading.</H4>
        <H5>This is a level five heading.</H5>
        <H6>This is a level six heading.</H6>
        <Paragraph>
          This is a pargraph. This is a pargraph. This is a pargraph. This is a
          pargraph. This is a pargraph. This is a pargraph. This is a pargraph.
          This is a pargraph. This is a pargraph. This is a pargraph. This is a
          pargraph. This is a pargraph.{' '}
        </Paragraph>
        <HelperText>Helper text is also very small.</HelperText>
        <CopyrightText>Copyright Sachin Sheoran 2020</CopyrightText>
      </Container>
    </>
  );
};
