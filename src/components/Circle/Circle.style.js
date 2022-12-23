import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ size }) => size};
  width: ${({ size }) => size};
  background-color: ${({ color }) => color};
  
  border-style: solid;
  border-width: 1px;
  border-color: ${({ borderColor }) => borderColor};
  
  border-radius: ${({ size }) => size};
  overflow: hidden;

`;
