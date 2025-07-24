// libraries
import { useCallback } from "react";

// components
import Modal from "../atoms/Modal";

// hooks
import { useAuth } from "../../hooks/useAuth";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoutModal = ({ isOpen, onClose }: LogoutModalProps) => {
  const { removeAccessToken } = useAuth();

  const handleLogout = useCallback(() => {
    removeAccessToken();
    window.location.reload();
  }, [removeAccessToken]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-[28rem] bg-white rounded-lg py-4 px-6">
        <div className="text-base font-semibold">
          Are you sure you want to logout?
        </div>
        <div className="flex items-center justify-end mt-4 space-x-4 text-sm">
          <button
            className="h-8 px-6 pb-0.5 text-xs font-semibold text-center text-gray-700 bg-gray-200 rounded-md hover:border-gray-300 border hover:opacity-75"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="h-8 px-6 pb-0.5 text-xs font-semibold text-center text-white rounded-md bg-primary hover:opacity-75"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </Modal>
  );
};
