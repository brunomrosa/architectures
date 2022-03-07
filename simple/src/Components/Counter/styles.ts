import styled from 'styled-components';

interface IContainerProps {
  containerBackgroundColor: string;
}

const Container = styled.div<IContainerProps>`
  min-width: 75px;
  min-height: 50px;

  background-color: var(${({ containerBackgroundColor }) => containerBackgroundColor});

  border: none;
  border-radius: 5px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--text);
`;


export {Container}