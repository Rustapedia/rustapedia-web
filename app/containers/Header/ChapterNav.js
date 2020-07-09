import styled from 'styled-components';

const ChapterNav = styled.div`
  width: 100%;
  background: rgba(245, 245, 247, 0.9);
  height: 70px;
  visibility: hidden;
  opacity: 0;

  a {
    color: black;
    margin: 0 auto;
    width: 13%;
    text-align: center;
  }
  &.visible {
    visibility: visible;
    opacity: 1;
    transition: opacity 1s linear;
  }
`;

export default ChapterNav;
