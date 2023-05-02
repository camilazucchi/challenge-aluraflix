import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
:root {
  --color-black: #000000;
  --color-gray: #C2C2C2;
  --color-white: #F5F5F5;
  --color-blue: #2A7AE4;

  --color-courses-frontend: #6BD1FF;
  --color-courses-datascience: #69953B;
  --color-courses-mobile: #FFBA05;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body, header {
  background-color: var(--color-black);
}
`;

const theme = {
  colors: {
    primary: "#2A7AE4",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
