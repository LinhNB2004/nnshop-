import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Lấy thông tin ra
  const accessToken = JSON.parse(localStorage.getItem("user"))?.accessToken;
  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
