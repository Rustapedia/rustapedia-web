import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.45em 1.5em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
  border: 2px solid white;
  color: white;
  background: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export default Button;
