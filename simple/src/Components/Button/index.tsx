import React from "react";
import { toast } from "react-toastify";
import { Container, Description } from "./styles";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  action: "increment" | "remove";
}

const Button = ({ onClick, children, id, action, ...rest }: ButtonProps) => {
  const showToast = () => {
    action === "increment"
      ? toast.success("Adicionado!")
      : toast.error("Removido!");
  };

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClick && onClick(e);
    showToast();
  };

  return (
    <Container
      id={`button@${id}`}
      data-testid={`button@${id}`}
      onClick={handleOnClick}
      action={action}
      {...rest}
    >
      <Description>{children}</Description>
    </Container>
  );
};

export default Button;
