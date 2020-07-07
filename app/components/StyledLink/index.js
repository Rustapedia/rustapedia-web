import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &.block {
    text-decoration: none;
    display: block;
    border-bottom: 10px solid transparent;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }

  span:last-child {
    padding-left: 10px;
  }
`;

export default StyledLink;
