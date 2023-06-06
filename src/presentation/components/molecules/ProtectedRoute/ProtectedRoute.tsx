import { Navigate, Outlet } from "react-router";

interface IProtectedRoute {
  isAllowed: boolean;
  redirectPath: string;
}

const ProtectedRoute = ({ isAllowed, redirectPath }: IProtectedRoute) => {
  if (isAllowed) {
    return <Outlet />;
  }
  return <Navigate to={redirectPath} />;
};

export default ProtectedRoute;
