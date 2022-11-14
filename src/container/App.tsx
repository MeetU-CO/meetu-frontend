import React from "react";
import Layout from "../modules/presentation/templates/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "./colors.variables.css";
import "./normalize.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css/bundle";
import HowItWorks from "../modules/presentation/pages/HowItWorks/HowItWorks";
import Login from "../modules/presentation/pages/Login/Login";
import Signup from "../modules/presentation/pages/Signup/Signup";
import Home from "../modules/presentation/pages/Home/Home";
import Profile from "../modules/presentation/pages/Profile/Profile";

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
