import styled from 'styled-components';

const Container = styled.div`
  min-height: 100%;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content:  space-evenly;
  align-items: center;
`;

const ButtonContainer = styled.div`
  button {
    margin: 0 25px;
  }
`;

export { Container, ButtonContainer };