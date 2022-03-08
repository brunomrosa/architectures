import React from "react";
import * as I from "./interfaces";

import { Container, Description } from "./styles";

export const Button = ({
  handleOnClick,
  children,
  id,
  action,
  ...rest
}: I.IButtonProps) => {
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
