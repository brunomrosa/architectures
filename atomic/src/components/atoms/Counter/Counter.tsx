import React from "react";
import * as I from "./interfaces";

import { Container } from "./styles";

export const Counter = ({
  children,
  id,
  onClick,
  CustomHeadingElement,
  containerBackground,
  ...rest
}: I.ICounterProps) => {
  return (
    <Container
      containerBackground={containerBackground}
      onClick={onClick}
      id={`counter@${id}`}
      data-testid={`counter@${id}`}
      {...rest}
    >
      <CustomHeadingElement
        id={`heading@counter@${id}`}
        data-testid={`heading@counter@${id}`}
      >
        {children}
      </CustomHeadingElement>
    </Container>
  );
};
