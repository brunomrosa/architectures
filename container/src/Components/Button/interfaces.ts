export interface IContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  action: "increment" | "remove";
  onClick?: () => void;
}

export interface IButtonProps extends IContainerProps {
  handleOnClick: () => void;
}