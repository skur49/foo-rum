// libraries
import { useCallback, useMemo, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { LogIn, LogOut, Mouse } from "lucide-react";

// hooks
import { useAuth } from "../../hooks/useAuth";
import { LogoutModal } from "../organisms/LogoutModal";

export const Header = () => {
  const location = useLocation();

  const { isLoggedIn } = useAuth();

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const isLoginPage = useMemo(
    () => location.pathname.includes("login"),
    [location]
  );

  const toggleLogoutModal = useCallback(() => {
    setIsLogoutModalOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between w-full h-20 px-8 bg-white">
        <div className="flex items-center space-x-2">
          <Mouse className="w-8 h-auto rotate-90" />
          <span className="text-sm font-bold">foo-rum</span>
        </div>
        {!isLoginPage ? (
          !isLoggedIn ? (
            <NavLink
              to="/login"
              className="flex items-center space-x-1 text-sm font-semibold"
            >
              <span className="pb-0.5">Login</span>
              <LogIn className="w-4 h-4" />
            </NavLink>
          ) : (
            <button
              className="flex items-center space-x-1 text-sm font-semibold"
              onClick={toggleLogoutModal}
            >
              <span className="pb-0.5">Logout</span>
              <LogOut className="w-4 h-4" />
            </button>
          )
        ) : (
          <NavLink to="/" className="text-sm font-semibold">
            Back to home
          </NavLink>
        )}
      </div>
      <LogoutModal isOpen={isLogoutModalOpen} onClose={toggleLogoutModal} />
    </>
  );
};
