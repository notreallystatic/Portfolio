import React, { useState } from 'react';
import {
  Container,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  H1,
  H2,
  H3,
  H5,
  H6,
  Paragraph,
  HelperText,
  CopyrightText,
} from '../index.js';
import styled from 'styled-components';
import './Navbar.css';
import { HomeLogo } from '../../utils';

const Nav = styled.nav`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

const DarkButton = styled(SecondaryButton)`
  border: 2px solid ${(props) => props.theme.textOnDisabled};
  color: ${(props) => props.theme.textOnDisabled};
`;

export const Navbar = ({ toggleDarkTheme }) => {
  return (
    <Nav>
      <div style={{ margin: '5px', marginLeft: '15px' }}>
        <img
          src={HomeLogo}
          alt='Logo'
          style={{ maxWidth: '122px', maxHeight: '151px' }}
        ></img>
      </div>
      <div style={{ margin: '5px', marginRight: '15px' }}>
        <DarkButton onClick={toggleDarkTheme}>Dark Theme</DarkButton>
      </div>
    </Nav>
  );
};
