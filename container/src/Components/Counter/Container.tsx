import React from "react";
import { Counter } from "./Counter";
import { IContainerProps } from "./interfaces";

export const Container = ({
  children,
  headingLevel,
  id,
  onClick,
  ...rest
}: IContainerProps) => {
  const CustomHeadingElement =
    `${headingLevel}` as unknown as React.FunctionComponent;

  const containerBackground =
    children === 0
      ? "--toastify-color-info"
      : children! > 0
      ? "--toastify-color-success"
      : "    --toastify-color-error";

  return (
    <>
      <Counter
        containerBackground={containerBackground}
        onClick={onClick}
        CustomHeadingElement={CustomHeadingElement}
        id={id}
        {...rest}
      >
        {children}
      </Counter>
    </>
  );
};
