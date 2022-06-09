/* eslint-disable no-unused-vars */
import React, { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RenderRoutes from "./elements/RenderRoutes/RenderRoutes";
import Header from "./components/Header/Header";
import routes from "./elements/RenderRoutes/index";
import Footer from "./components/Footer/Footer";
import "./App.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          {routes.map((router) => {
            return (
              <Route
                path={router.path}
                key={router.path}
                element={<RenderRoutes {...router} />}
              />
            );
          })}
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
