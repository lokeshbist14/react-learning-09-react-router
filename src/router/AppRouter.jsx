import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import User from "../pages/User";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import DashboardProfile from "../pages/DashboardProfile";
import DashboardSettings from "../pages/DashboardSettings";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import LocationExample from "../pages/LocationExample";
import SearchParamsExample from "../pages/SearchParamsExample";
import NavigationHistory from "../pages/NavigationHistory";
import Login from "../pages/Login";
import ProtectedRoute from "../pages/ProtectedRoute";
import NavigateExample from "../pages/NavigateExample";

function AppRouter() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/navigate" element={<NavigateExample />} />
        <Route path="/user/:id" element={<User />} />

        <Route path="/dashboard" element={<Dashboard />}>
         <Route path="profile" element={<DashboardProfile />} />
         <Route path="settings" element={<DashboardSettings />} />
        </Route>

        <Route path="*" element={<NotFound />} />

        <Route path="/product/:category/:id" element={<Product />} />
        <Route path="/location" element={<LocationExample />} />
        <Route path="/search" element={<SearchParamsExample />} />
        <Route path="/history" element={<NavigationHistory />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/protected-dashboard" element={
          <ProtectedRoute>
          <Dashboard />
          </ProtectedRoute>}
          />
        </Routes>
      

    </BrowserRouter>
  );
}

export default AppRouter;