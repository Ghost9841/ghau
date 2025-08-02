import { useAuth } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

export function AuthProvider() {
  const { userId } = useAuth();

  return userId ? <Outlet /> : <Navigate to="/sign-in" />;
}