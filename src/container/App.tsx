import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css/bundle";

import Layout from "../modules/presentation/templates/Layout/Layout";

import AboutUs from "../modules/presentation/pages/AboutUs/AboutUs";
import AuthCallback from "../modules/presentation/pages/AuthCallback/AuthCallback";
import Home from "../modules/presentation/pages/Home/Home";
import HowItWorks from "../modules/presentation/pages/HowItWorks/HowItWorks";
import Login from "../modules/presentation/pages/Login/Login";
import Profile from "../modules/presentation/pages/Profile/Profile";
import Signup from "../modules/presentation/pages/Signup/Signup";

import { getCookie } from "../modules/application/services/Cookie.service";

import { login } from "../modules/infraestructure/slices/AuthSlice";

import "./App.scss";
import "./colors.variables.css";
import "./normalize.css";

const App = () => {
  const dispatch = useDispatch();
  const auth = getCookie("auth");

  useEffect(() => {
    if (auth) {
      dispatch(login(auth));
    }
  }, [auth, dispatch]);

  return (
    <div className="app">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Profile />} />
          <Route path="como-funciona" element={<HowItWorks />} />
          <Route path="sobre-nosotros" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="auth-callback" element={<AuthCallback />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
