import styled from 'styled-components';

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  
  width: 100%;
  height: ${({ height }) => height}px;

`;
