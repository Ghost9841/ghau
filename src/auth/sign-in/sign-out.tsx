import { SignIn } from "@clerk/clerk-react";


export default function SignOutAuth() {
  //sd
  
  return (
    <div className="flex h-full items-center justify-center">
      <SignIn
        signUpUrl={`/sign-up`}
      />
    </div>
  );
}