import styled from 'styled-components';

const P = styled.p`
  font-size: 1rem;
  font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.7);

  &.logo {
    margin-top: -5px;
    margin-left: 250px;
    margin-bottom: 40px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    &.logo {
      font-size: 0.9rem;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 480px) {
    &.logo {
      margin-top: -2px;
      margin-left: 200px;
      font-size: 0.8rem;
      margin-bottom: 15px;
    }
  }
`;

export default P;
