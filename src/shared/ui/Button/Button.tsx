import type { ReactNode } from "react";

interface ButtonType {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonType) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
