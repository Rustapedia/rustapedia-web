import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = styled(Link)`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  background-color: rgba(191, 191, 191, 0.4);
  text-decoration: none;
  color: black;
`;

export default ListItem;
