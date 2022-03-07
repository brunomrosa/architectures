import React from "react";
import { ICounterProps } from "./interfaces";

import { Container } from "./styles";

export const Counter = ({
  children,
  id,
  onClick,
  CustomHeadingElement,
  containerBackground,
  ...rest
}: ICounterProps) => {
  return (
    <Container
      containerBackgroundColor={containerBackground}
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
