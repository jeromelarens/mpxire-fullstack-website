import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import PrivateRoute from "../components/PrivateRoute";

import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

import Admin from "../pages/Admin";
import AdminMessages from "../pages/AdminMessages";
import AdminVisitors from "../pages/AdminVisitors";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Admin (Protected + Nested) */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        >
          {/* Default dashboard */}
          <Route index element={<div />} />

          <Route path="messages" element={<AdminMessages />} />
          <Route path="visitors" element={<AdminVisitors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}