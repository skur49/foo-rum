// libraries
import { useCallback, useState, useMemo } from "react";
import { LogIn } from "lucide-react";

// components
import { Input } from "../atoms/Input";

export const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const isSignUpEnabled = useMemo(
    () =>
      username.length > 0 &&
      password.length > 0 &&
      repeatPassword.length > 0 &&
      password === repeatPassword,
    [username, password, repeatPassword]
  );

  const isPasswordValid = useMemo(
    () => password === repeatPassword,
    [password, repeatPassword]
  );

  const handleUsernameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleRepeatPasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRepeatPassword(e.target.value);
    },
    []
  );

  const handleSignUp = useCallback(() => {
    if (isSignUpEnabled) {
      alert("Function not implemented");
    }
  }, [isSignUpEnabled]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSignUp();
      }
    },
    [handleSignUp]
  );

  return (
    <div className="w-full pt-8 pb-12 space-y-10 bg-white shadow-sm h-max rounded-2xl">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center w-10 h-10 mb-6 bg-gray-100 rounded-full">
          <LogIn className="w-5 h-5" />
        </div>
        <div className="mb-1 text-lg font-bold">
          Create an account to continue
        </div>
        <div className="text-sm font-normal text-gray-500">
          Create an account to access all the features on this app
        </div>
      </div>
      <div className="px-10 space-y-4">
        <div className="space-y-1">
          <label className="pl-1 text-sm font-semibold">
            Email or username
          </label>
          <Input
            placeholder="Enter your email or username"
            value={username}
            onChange={handleUsernameChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="space-y-1">
          <label className="pl-1 text-sm font-semibold">Password</label>
          <Input
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="space-y-1">
          <label className="pl-1 text-sm font-semibold">Repeat password</label>
          <Input
            placeholder="Enter your password again"
            type="password"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            onKeyDown={handleKeyDown}
          />
          {!isPasswordValid && repeatPassword.length > 0 ? (
            <label className="pl-1 text-xs font-medium text-red-500">
              Password doesn't match
            </label>
          ) : null}
        </div>
        <button
          className="w-full h-11 !mt-6 text-sm font-bold text-white bg-primary rounded-lg hover:opacity-80 disabled:opacity-80 disabled:cursor-not-allowed"
          disabled={!isSignUpEnabled}
          onClick={handleSignUp}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};
