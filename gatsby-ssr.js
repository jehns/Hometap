/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import GlobalStyle from './src/styles/globalStyle';
import { FormContextProvider } from './src/context/form';
import "./src/styles/globalStyle/fonts.css";


export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <FormContextProvider>
        <GlobalStyle />
        {element}
      </FormContextProvider>
    </ThemeProvider>
  );
};
