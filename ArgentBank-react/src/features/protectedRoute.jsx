import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { isConnected } = useSelector((state) => state.connect);
  return isConnected === true ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default ProtectedRoute; 
