import React from "react";

import { ButtonContainer, Container } from "./styles";

import Button from "../../Components/Button";
import Counter from "../../Components/Counter";
import { IHomeProps } from "./interfaces";

export const Home = ({
  count,
  handleIncrement,
  handleRemove,
  handleClearCounter,
  ...rest
}: IHomeProps) => {
  return (
    <Container id="home" data-testid="home" {...rest}>
      <Counter id="home" onClick={handleClearCounter} headingLevel={`h4`}>
        {count}
      </Counter>
      <ButtonContainer
        id="buttonContainer@home"
        data-testid="buttonContainer@home"
      >
        <Button action="remove" id={`home@remove`} onClick={handleRemove}>
          Remover!
        </Button>
        <Button action="increment" onClick={handleIncrement}>
          Adicionar!
        </Button>
      </ButtonContainer>
    </Container>
  );
};
