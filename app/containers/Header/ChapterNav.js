import styled, { keyframes } from 'styled-components';

const ChapterNavFrames = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const ChapterNav = styled.div`
  background: #fafafa;
  position: absolute;
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
