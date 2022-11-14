import { useEffect } from "react";
import Layout from "../modules/presentation/templates/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "./colors.variables.css";
import "./normalize.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import HowItWorks from "../modules/presentation/pages/HowItWorks/HowItWorks";
import Login from "../modules/presentation/pages/Login/Login";
import Signup from "../modules/presentation/pages/Signup/Signup";
import Home from "../modules/presentation/pages/Home/Home";
import Profile from "../modules/presentation/pages/Profile/Profile";
import { getCookie } from "../modules/application/services/Cookie.service";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../modules/infraestructure/slices/AuthSlice";

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
          <Route path="login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
