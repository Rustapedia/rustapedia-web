import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 2.3rem;
  font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  margin: 0;

  &.headline {
    font-family: 'Pacifico';
    font-weight: 400;
    font-size: 4rem;
    line-height: 1em;
    color: white;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 2rem;
    &.headline {
      font-size: 3.3rem;
    }
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    &.headline {
      font-size: 3rem;
    }
  }
`;

export default H1;
