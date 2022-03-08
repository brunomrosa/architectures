import styled from 'styled-components';

import * as I from "./interfaces";

const Container = styled.button<I.IContainerProps>`
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