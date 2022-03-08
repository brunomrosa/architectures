import React from "react";
import * as I from "./interfaces";

import { Container } from "./styles";
import * as Atoms from "../../atoms";

export const ButtonContainer = ({
  handleClearCounter,
  handleRemove,
  handleIncrement,
  children,
  id,
  ...rest
}: I.IButtonContainerProps) => {
  return (
    <Container {...rest} id={id} data-testid={id}>
      <Atoms.Button action="remove" id="home@remove" onClick={handleRemove}>
        Remover!
      </Atoms.Button>
      <Atoms.Button action="increment" onClick={handleIncrement}>
        Adicionar!
      </Atoms.Button>
    </Container>
  );
};
