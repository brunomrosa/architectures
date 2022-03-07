import React from "react";

import { Container } from "./styles";

interface ICounterProps extends React.HTMLAttributes<HTMLDivElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Counter = ({
  children,
  headingLevel,
  id,
  onClick,
  ...rest
}: ICounterProps) => {
  const CustomHeadingElement = `${headingLevel}` as keyof JSX.IntrinsicElements;

  const containerBackground =
    children === 0
      ? "--toastify-color-info"
      : children! > 0
      ? "--toastify-color-success"
      : "    --toastify-color-error";

  return (
    <Container
      containerBackgroundColor={containerBackground}
      onClick={onClick}
      id={id}
      data-testid={id}
      {...rest}
    >
      <CustomHeadingElement>{children}</CustomHeadingElement>
    </Container>
  );
};

export default Counter;
