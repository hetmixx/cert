import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Bookingpage from "./pages/Bookingpage";
import ConfirmationPage from "./pages/ConfirmationPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Bookingpage />} path="/bookings" />
      <Route element={<ConfirmationPage />} path="/confirmation" />
    </Routes>
  );
};

export default AppRoutes;
