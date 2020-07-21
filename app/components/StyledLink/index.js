import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: block;

  &.block {
    display: block;
  }
  &.white {
    color: #fff;
  }
  span {
    padding-left: 5px;
  }
  &:hover {
    color: #4183c4;
  }
  @media (min-width: 481px) and (max-width: 768px) {
  }
  @media (max-width: 480px) {
    span {
      padding-left: 2px;
    }
  }
`;

export default StyledLink;
