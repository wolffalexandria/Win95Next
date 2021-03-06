import React from "react";
// import "./index.css";
import WindowsStartBar from "../Components/Desktop/windowsstartbar";
import theme from "react95/dist/themes/candy";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";
import DesktopManager from "../Components/Desktop/DesktopManager";
// import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
// import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('./fonts/ms_sans_serif.woff') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('./fonts/ms_sans_serif_bold.woff') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

function Application() {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <WindowsStartBar />
        <div className="desktop">
          <DesktopManager />
        </div>
      </ThemeProvider>
    </div>
  );
}
export default Application;
