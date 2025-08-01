import { SignIn } from "@clerk/clerk-react";
import { useSearchParams } from "react-router";




export default function Page() {
  const searchParams = useSearchParams();
  //ask
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn
        signUpUrl={`/sign-up`}
      />
    </div>
  );
}