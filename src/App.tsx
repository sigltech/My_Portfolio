import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  HomePage,
  ExperiencePage,
  Page404
} from "./pages";
import {createTheme, ThemeProvider, CssBaseline} from "@mui/material";
import Layout from "./layout/layout";

const getDesignTokens = (isDark: boolean) => {
  let mode: 'light' | 'dark';
  if(isDark) {
    mode = 'dark'
  } else {
    mode = 'light'
  }

  return ({
    palette: {
      mode,
      primary: {
        main: '#000',
        ...(mode === 'dark' && {
          main: 'rgb(240, 244, 239)',
        }),
      },
      background: {
        ...(mode === 'dark' ?
        {
        default: 'rgb(52, 73, 102)',
        paper: 'rgb(52, 73, 102)',
        }:
        {
          default: 'rgb(240, 244, 239)',
          paper: 'rgb(240, 244, 239)',
        })
      },
      text: {
        ...(mode === 'light'
            ? {
              primary: 'rgb(0, 0, 0)',
              secondary: 'rgb(0, 0, 0)',
            }
            : {
              primary: '#fff',
              secondary: '#fff',
            }),
      },
    },
  })
};

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const getOrSetModeFromStorage = (): void => {
    let viewMode;
    if(window.localStorage.getItem('viewMode')) {
      viewMode = window.localStorage.getItem('viewMode');
    } else {
      window.localStorage.setItem('viewMode', 'false')
      viewMode = window.localStorage.getItem('viewMode');
    }
    setIsDarkMode(viewMode === 'true')
  };

  React.useEffect(() => {
    setIsLoading(true)
    getOrSetModeFromStorage();
    setTimeout(() => {
      setIsLoading(false);
      console.log('not loading anymore')
    },2000)
  },[])

  const theme = createTheme(getDesignTokens(isDarkMode));
  const router = createBrowserRouter([
    {
      element:
          <Layout
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
          />,
      children: [
          {
            path: "/",
            element:
                <HomePage
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />,
          },
    {
      path: "/experience",
      element:
          <ExperiencePage
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
          />,
    },
  ]},
  {
    path:"*",
    element: <Page404 />
  },
]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
