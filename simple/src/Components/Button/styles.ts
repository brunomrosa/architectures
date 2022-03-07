import styled from 'styled-components';

const Container = styled.button`
  min-width: 200px;
  min-height: 50px;

  background-color: var(--secondary);

  border: none;
  border-radius: 5px;
`;

const Description = styled.p`
  color: var(--text);
`

export { Container, Description };