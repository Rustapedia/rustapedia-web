import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

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
`;

export default StyledLink;
