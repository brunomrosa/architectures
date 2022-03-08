export interface IHomeProps extends  React.HTMLAttributes<HTMLDivElement> {
  count: number;
  handleIncrement: () => void;
  handleRemove: () => void;
  handleClearCounter: () => void;
  
}