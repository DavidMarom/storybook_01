import styled from 'styled-components';

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  background-color: ${({ background }) => background};
  width: 100%;
  height: ${({ height }) => height}px;

`;
