import Profile from "@/features/User/page";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export function AuthProvider() {
  const { userId } = useAuth();

  return userId ? <Profile /> : <Navigate to="/sign-in" />;
}