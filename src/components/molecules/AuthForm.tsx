import { useCallback, useState } from "react";
import { SignUpForm } from "../molecules/SignUpForm";
import { SignInForm } from "../molecules/SignInForm";

export const AuthForm = () => {
  const [isSignInFlow, setIsSignInFlow] = useState(true);

  const toggleAuthFlow = useCallback(() => {
    setIsSignInFlow((prev) => !prev);
  }, []);

  return (
    <div className="w-[30rem] rounded-3xl bg-gray-200 p-2">
      {isSignInFlow ? <SignInForm /> : <SignUpForm />}
      <div className="pt-4 pb-3 space-x-2 text-sm text-center">
        <span className="text-gray-700">
          {!isSignInFlow
            ? "Already have an account?"
            : "Do not have an account?"}
        </span>
        <button
          onClick={toggleAuthFlow}
          className="font-semibold text-primary hover:opacity-75"
        >
          {isSignInFlow ? "Sign Up" : "Sign in"}
        </button>
      </div>
    </div>
  );
};
