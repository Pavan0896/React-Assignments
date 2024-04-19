import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { loginContext } from "./LoginContext";

const PrivateRoute = ({ children }) => {
    let auth = useContext(loginContext)
    console.log(auth.auth)
    

  return auth.auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
