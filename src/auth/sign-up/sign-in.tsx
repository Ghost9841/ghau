import {  SignUp } from "@clerk/clerk-react";




export default function SignInAuth() {
  //ask
  return (
    <div className="flex h-full items-center justify-center">
      <SignUp signInUrl="/sign-in" redirectUrl={"/profile"} />
    </div>
  );
}