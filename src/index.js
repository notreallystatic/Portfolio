import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme, darkTheme } from './utils';
import { Some } from './Some';
import {
  Button,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <PrimaryButton onClick={() => setUseDarkTheme(!useDarkTheme)}>
        Dark Theme
      </PrimaryButton>
      <div style={{ margin: '10px' }}>
        <PrimaryButton modifiers='small'>small</PrimaryButton>&emsp;
        <SecondaryButton modifiers='small'>small</SecondaryButton>&emsp;
        <TertiaryButton modifiers='small'>small</TertiaryButton>
      </div>
      <div style={{ margin: '10px' }}>
        <PrimaryButton modifiers='large'>Large</PrimaryButton>&emsp;
        <SecondaryButton modifiers='large'>Large</SecondaryButton>&emsp;
        <TertiaryButton modifiers='large'>Large</TertiaryButton>
      </div>
      <div style={{ margin: '10px' }}>
        <PrimaryButton>default</PrimaryButton>&emsp;
        <SecondaryButton>default</SecondaryButton>&emsp;
        <TertiaryButton>default</TertiaryButton>
      </div>
      <div style={{ margin: '10px' }}>
        <PrimaryButton disabled> disabled</PrimaryButton>&emsp;
        <SecondaryButton disabled> disabled</SecondaryButton>&emsp;
        <TertiaryButton disabled> disabled</TertiaryButton>
      </div>
      <div style={{ margin: '10px' }}>
        <PrimaryButton modifiers='warning'>warning</PrimaryButton>
      </div>
      <div style={{ margin: '10px' }}>
        <PrimaryButton modifiers='error'>error</PrimaryButton>
      </div>
      <div style={{ margin: '10px' }}>
        <PrimaryButton modifiers='success'>success</PrimaryButton>
      </div>
      <Some />
      {/* <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: '100vw',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        Here you go
        <br />
        another one.
      </div>
      <br /> */}
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
