import React from "react";

import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

const Button = ({ onClick, children, ...rest }: ButtonProps) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Button;