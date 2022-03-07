import styled from 'styled-components';

interface IContainerProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  action: "increment" | "remove";
} 

const Container = styled.button<IContainerProps>`
  min-width: 200px;
  min-height: 50px;

  background-color: var(${({action}) => action === 'remove' ? "--attention" : "--secondary"});

  border: none;
  border-radius: 5px;

  
`;

const Description = styled.p`
  color: var(--text);
`

export { Container, Description };