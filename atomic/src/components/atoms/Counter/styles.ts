import styled from 'styled-components';

import * as I from "./interfaces";

const Container = styled.div<I.IStyleContainerProps>`
  min-width: 75px;
  min-height: 50px;

  background-color: var(${({ containerBackground }) => containerBackground});

  border: none;
  border-radius: 5px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--text);
`;


export {Container}