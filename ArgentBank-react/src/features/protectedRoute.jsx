import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { isConnected } = useSelector((state) => state.connect);
  const connected = sessionStorage?.getItem("connected");
  const tokenSession = sessionStorage?.getItem("tokenSession");
  return (isConnected === true || (connected === "true" && tokenSession !== null)) ? (<Outlet />) : (<Navigate to="/sign-in" />);
}

export default ProtectedRoute; 
