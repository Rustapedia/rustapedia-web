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
`;

export default Button;
