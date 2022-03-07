import React from "react";
import { IButtonProps } from "./interfaces";

import { Container, Description } from "./styles";

export const Button = ({
  handleOnClick,
  children,
  id,
  action,
  ...rest
}: IButtonProps) => {
  return (
    <Container
      {...rest}
      id={`button@${id}`}
      data-testid={`button@${id}`}
      onClick={handleOnClick}
      action={action}
    >
      <Description>{children}</Description>
    </Container>
  );
};
