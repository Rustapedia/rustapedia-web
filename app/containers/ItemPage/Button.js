import styled from 'styled-components';

const Button = styled.button`
  border: 0px;
  padding: 5px 20px;
  font-weight: bold;
  outline: none;
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.2);

  &.active {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export default Button;
