import styled from 'styled-components';

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  background-color: ${({ background }) => background};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

`;
