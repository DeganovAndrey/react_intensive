import { useEffect } from "react";
import ReactDOM from "react-dom";
import s from "./Modal.module.css";

type TModal = {
  isOpen: boolean;
  onClose: () => void;
};
const Modal = ({ isOpen, onClose }: TModal) => {
  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", closeModal);
    return () => window.removeEventListener("keydown", closeModal);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>REACT-INTENSIVE</h2>
      </div>
    </div>,
    document.getElementById("modal-root")!,
  );
};

export default Modal;
