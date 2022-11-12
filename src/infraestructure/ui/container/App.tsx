import React from "react";
import Layout from "../templates/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "./colors.variables.css";
import "./normalize.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css/bundle";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Profile />} />
          <Route path="como-funciona" element={<HowItWorks />} />
          <Route path="login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
