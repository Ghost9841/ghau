import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { SignOutButton } from "@/auth/sign-out/sign-out";

export function Navbar() {
  const { isSignedIn, user } = useUser();

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-bold">
          MyApp
        </Link>
        
        <nav className="flex items-center gap-4">
          {isSignedIn ? (
            <>
              <span className="text-sm">Hello, {user.firstName}</span>
              <SignOutButton />
            </>
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link to="/sign-in">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/sign-up">Sign Up</Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}