import styled from 'styled-components';

const DARK = '#555555';
const LIGHT = '#dddddd';

export const Container = styled.div`
  height: ${({ height }) => height}px;
  max-width: ${({ width }) => width}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ darkMode }) => (darkMode ? `${DARK}` : `${LIGHT}`)};
  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;

`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  padding-left: 10px;
`;

export const P = styled.p`
font-family: 'Roboto', sans-serif;
font-size: .8rem;
color: ${({ darkMode }) => (darkMode ? `${LIGHT}` : `${DARK}`)};
`;

export const Title = styled.h1`
margin: 0;
font-family: 'Roboto', sans-serif;
font-size: 1rem;
font-weight: 700;
color: ${({ darkMode }) => (darkMode ? `${LIGHT}` : `${DARK}`)};
`;
