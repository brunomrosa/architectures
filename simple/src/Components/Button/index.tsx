import React from "react";

import { Container, Description } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ onClick, children, id, ...rest }: ButtonProps) => {
  return (
    <Container
      id={`button@${id}`}
      data-testid={`button@${id}`}
      onClick={onClick}
      {...rest}
    >
      <Description>{children}</Description>
    </Container>
  );
};

export default Button;
