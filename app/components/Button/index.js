import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.45em 1.5em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border: 0px;
  padding: 5px 20px;
  font-weight: bold;
  outline: none;
  font-size: 1rem;
  background: rgba(191, 191, 191, 0.8);

  &:hover {
    color: #4183c4;
  }

  &.active {
    background: rgba(191, 191, 191, 0.4);
  }

  &.durability {
    font-size: 0.9rem;
    margin: 10px 0;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid rgba(191, 191, 191, 1);
  }
  &.white {
    background: rgba(255, 255, 255, 0.3);
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 5px 15px;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 5px 7px;
  }
`;

export default Button;
