/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import GlobalStyle from './src/styles/globalStyle';
import "./src/styles/globalStyle/fonts.css"

export const wrapRootElement = ({ element }) => {
 return (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
 );
};
