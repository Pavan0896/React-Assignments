import { useContext } from "react";
import { authContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = useContext(authContext);
  return auth.auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
