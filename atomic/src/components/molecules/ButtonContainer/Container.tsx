import React from "react";

import { ButtonContainer } from "./ButtonContainer";
import * as I from "./interfaces";

export const Container = ({
  children,
  handleRemove,
  handleClearCounter,
  handleIncrement,
  id,
  ...rest
}: I.IContainerProps) => {
  return (
    <>
      <ButtonContainer
        handleRemove={handleRemove}
        handleIncrement={handleIncrement}
        handleClearCounter={handleClearCounter}
        {...rest}
        id={id}
      >
        {children}
      </ButtonContainer>
    </>
  );
};
