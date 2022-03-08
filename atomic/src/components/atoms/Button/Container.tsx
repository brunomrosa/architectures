import React from "react";
import { toast } from "react-toastify";
import { Button } from "./Button";
import * as I from "./interfaces";

export const Container = ({
  children,
  onClick,
  action,
  id,
  ...rest
}: I.IContainerProps) => {
  const showToast = () => {
    action === "increment"
      ? toast.success("Adicionado!")
      : toast.error("Removido!");
  };

  const handleOnClick = () => {
    onClick && onClick();
    showToast();
  };
  return (
    <>
      <Button {...rest} id={id} handleOnClick={handleOnClick} action={action}>
        {children}
      </Button>
    </>
  );
};
