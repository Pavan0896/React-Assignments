import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const auth = useSelector(store=>store.auth)
  return auth.isAuthenticated ? children : <Navigate to="/login"/>
    
}

export default PrivateRoute;
