import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    word-wrap: break-word;
    -webkit-text-size-adjust: none; 
		-moz-text-size-adjust: none; 
		-ms-text-size-adjust: none; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    -webkit-touch-callout:none;
  }
  body {
	  background-color: #060d17;
    width: 100vw;
    color: #bbb;
  }
  * {
    box-sizing: border-box;
    font-family: inherit;
    color: inherit;
    text-decoration: none;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, em, img, small, b, u, i, ul, li, form, label, footer, header, nav, section, input {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    list-style: none;
  }

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }
`;

export default GlobalStyle;
