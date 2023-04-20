import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Validate from "./Pages/Portal/User/Validate/Validate";
import Onboarding from "./Pages/Portal/User/Onboarding/Onboarding";
import Profile from "./Pages/Portal/User/Profile/Profile";
import Success from "./Pages/Portal/User/Onboarding/Success";
import Login from "./Pages/Portal/User/Authentication/Login";
import ForgotPassword from "./Pages/Portal/User/Authentication/ForgotPassword";
import ResetPassword from "./Pages/Portal/User/Authentication/ResetPassword";

import {
  DashboardRootLayout,
  Dashboard,
  LearningCircles,
  MuLearnAdmin,
} from "./views/DashboardView/exports";

function App() {
  return (
    <Routes>
      <Route path="user/validate/:token" element={<Validate />} />
      <Route path="user/onboarding" element={<Onboarding />} />
      <Route path="user/profile" element={<Profile />} />
      <Route path="user/login" element={<Login />} />
      <Route path="user/forgot-password" element={<ForgotPassword />} />
      <Route path="user/reset-password" element={<ResetPassword />} />

      {/* Dashboard */}
      <Route path="dashboard" element={<DashboardRootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="learning-circles" element={<LearningCircles />} />
        <Route path="admin" element={<MuLearnAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
