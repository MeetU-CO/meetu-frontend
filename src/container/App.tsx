import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css/bundle";

import ProtectedRoute from "../presentation/components/molecules/ProtectedRoute/ProtectedRoute";

import Layout from "../presentation/templates/Layout/Layout";

import AboutUs from "../presentation/pages/AboutUs/AboutUs";
import AuthCallback from "../presentation/pages/AuthCallback/AuthCallback";
import Home from "../presentation/pages/Home/Home";
import HowItWorks from "../presentation/pages/HowItWorks/HowItWorks";
import Login from "../presentation/pages/Login/Login";
import Profile from "../presentation/pages/Profile/Profile";
import Signup from "../presentation/pages/Signup/Signup";

import { getCookie } from "../modules/cookie/application/getCookie";

import { login } from "../modules/auth/infrastructure/slices/AuthSlice";
import { createUniversalCookieRepository } from "../modules/cookie/infrastructure/UniversalCookieRepository";
import "./App.scss";
import "./colors.variables.css";
import "./normalize.css";

const App = () => {
  const cookieRepository = createUniversalCookieRepository();

  const dispatch = useDispatch();
  const auth: string = getCookie(cookieRepository, "auth") || "";

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
          <Route path="como-funciona" element={<HowItWorks />} />
          <Route path="sobre-nosotros" element={<AboutUs />} />
          <Route
            element={
              <ProtectedRoute isAllowed={auth != ""} redirectPath="/login" />
            }
          >
            <Route path="/perfil/:id" element={<Profile />} />
          </Route>
          <Route
            element={
              <ProtectedRoute isAllowed={!(auth != "")} redirectPath="/" />
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="auth-callback" element={<AuthCallback />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
