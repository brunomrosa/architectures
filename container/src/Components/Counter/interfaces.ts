import React from "react";

type THeadeingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
  headingLevel: THeadeingLevel;
}


export interface ICounterProps extends Omit<IContainerProps, 'headingLevel'>  {
  CustomHeadingElement: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>>;
  containerBackground: string;
  
}