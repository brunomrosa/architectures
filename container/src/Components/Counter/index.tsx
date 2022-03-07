import React from "react";

import { Container } from "./styles";

const Counter: React.FC = ({ children }) => {
  return (
    <Container>
      <h4>{children}</h4>
    </Container>
  );
};

export default Counter;
