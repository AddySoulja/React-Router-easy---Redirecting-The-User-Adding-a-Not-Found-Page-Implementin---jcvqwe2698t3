import React from "react";
import { Route, Routes } from "react-router-dom";
import { Index } from "./Pages/Index";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  );
};
