import React, { useState } from "react";
import Button from "../../Components/Button";
import Counter from "../../Components/Counter";

import { ButtonContainer, Container } from "./styles";

export const Home = ({ ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleRemove = () => {
    setCount((prev) => prev - 1);
  };

  const handleClearCounter = () => {
    setCount(0);
  };

  return (
    <Container id="home" data-testid="home" {...rest}>
      <Counter id="counter" onClick={handleClearCounter} headingLevel={`h4`}>
        {count}
      </Counter>
      <ButtonContainer>
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
