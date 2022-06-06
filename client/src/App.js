import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ProfilePage from "./Pages/ProfilePage";
import ForgotPassPage from "./Pages/ForgotPassPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import EmailActivationPage from "./Pages/EmailActivationPage";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import EditUserPage from "./Pages/EditUserPage";
import AdminRoutePage from "./Pages/AdminRoutePage";
import UnAuthorizedPage from "./Pages/UnAuthorizedPage";
import useAdmin from "./CustomHooks/useAdmin";

function App() {
  const isAdmin = useAdmin();
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admin"
          element={isAdmin ? <AdminRoutePage /> : <UnAuthorizedPage />}
        />
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-user/:id" element={<EditUserPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPassPage />} />
          <Route
            path="/user/activate/:activation_token"
            element={<EmailActivationPage />}
          />
          <Route path="/user/reset/:token" element={<ResetPasswordPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
