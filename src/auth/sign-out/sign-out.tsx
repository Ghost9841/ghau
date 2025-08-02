
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export function SignOutButton() {
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/"); // Redirect to sign-in page after logout
  };

  return (
    <Button variant="ghost" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
}