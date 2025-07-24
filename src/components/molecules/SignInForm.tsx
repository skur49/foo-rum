// libraries
import { useCallback, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LogIn } from "lucide-react";

// components
import { Input } from "../atoms/Input";

// hooks
import { useAuth } from "../../hooks/useAuth";

// utils
import { checkTestUserLogin } from "../../utils/login";

export const SignInForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isSignInEnabled = useMemo(
    () => username.length > 0 && password.length > 0,
    [username, password]
  );

  const isLoginPage = useMemo(
    () => location.pathname.includes("login"),
    [location]
  );

  const { setAccessToken } = useAuth();

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

  const handleSignIn = useCallback(() => {
    if (isSignInEnabled) {
      if (checkTestUserLogin({ username, password })) {
        setAccessToken();

        if (isLoginPage) {
          navigate("/");
        } else {
          window.location.reload(); // Reload the page
        }
      } else {
        alert("User not found");
      }
    }
  }, [
    username,
    password,
    isSignInEnabled,
    isLoginPage,
    navigate,
    setAccessToken,
  ]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSignIn();
      }
    },
    [handleSignIn]
  );

  return (
    <div className="w-full pt-8 pb-12 space-y-10 bg-white shadow-sm h-max rounded-2xl">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center w-10 h-10 mb-6 bg-gray-100 rounded-full">
          <LogIn className="w-5 h-5" />
        </div>
        <div className="mb-1 text-lg font-bold">Sign in to continue</div>
        <div className="text-sm font-normal text-gray-500">
          Sign in to access all the features on this app
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
        <button
          className="w-full h-11 !mt-6 text-sm font-bold text-white bg-primary rounded-lg hover:opacity-80 disabled:opacity-80 disabled:cursor-not-allowed"
          disabled={!isSignInEnabled}
          onClick={handleSignIn}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};
