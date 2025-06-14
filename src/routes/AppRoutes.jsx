import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Quote from "../pages/Quote";
import Contact from "../pages/Contact";
import NotFound from "../pages/Not_Found";
import MotorInsurance from "../pages/MotorInsurance";
import PAInsurance from "../pages/PAInsurance"
import HealthInsurance from "../pages/HealthInsurance";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/motor" element={<MotorInsurance />} />
        <Route path="/pa" element={<PAInsurance />} />
        <Route path="/health" element={<HealthInsurance />} />
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
