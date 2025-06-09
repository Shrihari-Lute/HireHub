import React from "react";

import "./App.css";
import "./Styles/custom.css";
import "./Styles/custom.scss";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import HomePage from "./Pages/HomePage";
import FindJobsPage from "./Pages/FindJobsPage";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    // MantineProvider applies global styles and resets
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* BrowserRouter enables client-side routing */}
      <BrowserRouter>
        {/* Global Header visible on all pages */}
        <Header />

        {/* Define application routes */}
        <Routes>
          {/* Route to Find Jobs Page */}
          <Route path="/find-jobs" element={<FindJobsPage />} />

          {/* Default fallback route - loads Home Page for any undefined path */}
          <Route path="*" element={<HomePage />} />
        </Routes>

        {/* Global Footer visible on all pages */}
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
