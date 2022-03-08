export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  handleIncrement: () => void;
  handleRemove: () => void;
  handleClearCounter: () => void;

}

export interface IButtonContainerProps extends IContainerProps {
  
}