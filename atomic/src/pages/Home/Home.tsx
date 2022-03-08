import React from "react";

import { ButtonContainer, Container } from "./styles";

import * as Atoms from "../../components/atoms";
import * as Molecules from "../../components/molecules";

import * as I from "./interfaces";

export const Home = ({
  count,
  handleIncrement,
  handleRemove,
  handleClearCounter,
  ...rest
}: I.IHomeProps) => {
  return (
    <Container id="home" data-testid="home" {...rest}>
      <Atoms.Counter id="home" onClick={handleClearCounter} headingLevel={`h4`}>
        {count}
      </Atoms.Counter>
      <Molecules.ButtonContainer
        id="buttonContainer@home"
        data-testid="buttonContainer@home"
        handleIncrement={handleIncrement}
        handleRemove={handleRemove}
        handleClearCounter={handleClearCounter}
      />
    </Container>
  );
};
