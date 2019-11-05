import styled from 'styled-components';

const Button = styled.button`
  border: 0px;
  padding: 5px 20px;
  background: rgba(0, 0, 0, 0.2);
  font-weight: bold;
  outline: none;

  &:active {
    color: gray;
  }

  &:hover,
  :focus {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export default Button;
