// libraries

// components
import Modal from "../atoms/Modal";

// hooks
import { AuthForm } from "../molecules/AuthForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <AuthForm />
    </Modal>
  );
};
