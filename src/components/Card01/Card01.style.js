import styled from 'styled-components';

const DARK = '#555555';
const LIGHT = '#cccccc';

export const Container = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ darkMode }) => (darkMode ? `${DARK}` : `${LIGHT}`)};
  padding: 2px;
`;
