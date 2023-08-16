import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const storedToken = localStorage.getItem("authToken");

  return storedToken ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
