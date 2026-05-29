import React from "react";

import ReactDOM
from "react-dom/client";

import App from "./App.jsx";

import {
  BrowserRouter
} from "react-router-dom";

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

import AuthProvider
from "./context/AuthProvider.jsx";

const darkTheme =
  createTheme({

    palette: {
      mode: "dark",
    },

  });

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <AuthProvider>

      <BrowserRouter>

        <ThemeProvider
          theme={darkTheme}
        >

          <CssBaseline />

          <App />

        </ThemeProvider>

      </BrowserRouter>

    </AuthProvider>

  </React.StrictMode>
);