import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = styled(Link)`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  background-color: rgb(191, 191, 191);
  padding: 5px 10px 5px 10px;
  text-decoration: none;
  color: black;
`;

export default ListItem;
