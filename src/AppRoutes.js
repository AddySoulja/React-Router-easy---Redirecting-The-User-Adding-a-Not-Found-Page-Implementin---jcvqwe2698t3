import React from "react";
import { Route, Routes } from "react-router-dom";
import { Index } from "./Pages/Index";
import { Home } from "./Pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  );
};
