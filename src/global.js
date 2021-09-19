import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
      background-color: ${({ theme }) => theme.primaryDark};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    min-height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
    color: ${({ theme }) => theme.primaryLight};
  }
`;
