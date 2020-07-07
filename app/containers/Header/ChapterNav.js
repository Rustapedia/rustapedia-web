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
  background: rgba(245, 245, 247, 0.9);
  position: absolute;
  width: 100%;
  padding: 20px;
  animation-name: ${ChapterNavFrames};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0s;
  animation-direction: normal;

  a {
    color: black;
    margin: 0 auto;
    width: 14%;
    text-align: center;
  }
`;

export default ChapterNav;
