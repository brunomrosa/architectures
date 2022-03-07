import React, { useState } from "react";
import Button from "../../Components/Button";
import Counter from "../../Components/Counter";

import { ButtonContainer, Container } from "./styles";

export const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleRemove = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <Container>
      <Counter>{count}</Counter>
      <ButtonContainer>
        <Button onClick={handleIncrement}>Adicionar!</Button>
        <Button onClick={handleRemove}>Remover!</Button>
      </ButtonContainer>
    </Container>
  );
};
