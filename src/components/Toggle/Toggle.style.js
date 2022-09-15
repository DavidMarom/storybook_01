
import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  border-radius: 50px;
  width: 100px;
  background-color: #777777;
  padding: 2px;
`;

export const Knoba = styled.div`
  width: 50px;
  height: 50px;
  background-color: #00aaff;
  margin-left: 50px;

  animation-name: ani2;
  animation-duration: .2s;
  animation-iteration-count: 1;

  border-radius: 50px;

  @keyframes ani2 {
  0% {margin-left: 0px; background-color: #aaaaaa;width: 50px}
  50% {margin-left: 25px; background-color: #00aaff;width: 75px}
  100% {margin-left: 50px; background-color: #00aaff;width: 50px}
}
`;

export const Knobb = styled.div`
  width: 50px;
  height: 50px;
  background-color: #aaaaaa;
  margin-left: 0px;

  animation-name: ani;
  animation-duration: .2s;
  animation-iteration-count: 1;

  border-radius: 50px;

  @keyframes ani {

  0% {margin-left: 50px; background-color: #00aaff;width: 50px}
  50% {margin-left: 25px; background-color: #00aaff;width: 75px}
  100% {margin-left: 0px; background-color: #aaaaaa;width: 50px}
}
`;
