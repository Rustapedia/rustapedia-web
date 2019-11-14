import styled, { keyframes } from 'styled-components';

const ChapterNavFrames = keyframes`
0% {
    left: 600px;
    opacity: 0;
}
75% {
    opasity: 0.3;
}
100% {
    left: 0px;
    opacity: 1;
}
`;

const ChapterNav = styled.div`
  background: #fafafa;
  position: fixed;
  width: 100%;
  animation-name: ${ChapterNavFrames};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-direction: normal;

  a {
    color: black;
    padding: 20px;
    margin: 0 auto;
  }
`;

export default ChapterNav;
