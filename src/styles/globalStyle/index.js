import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  #__gatsby {
    display: flex;
    flex-flow: column;
    flex-grow: 1;
  }
  html {
    height: 100%;
    scroll-behavior: smooth;
  }
  body {
    ${'' /* background-color: ${props => props.theme.colors.background.page}; */}
    width: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    /* box-sizing: border-box; */
    -webkit-font-smoothing: antialiased;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    font-family: ${props => props.theme.fonts.AverageSansRegular};
  }
  * {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${'' /* color: ${props => props.theme.colors.text.header}; */}
    font-weight: normal;
    ${'' /* font-family: ${props => props.theme.fonts.avenirNextBold}; */}
    line-height: 1.1em;
  }

`

export default GlobalStyle
