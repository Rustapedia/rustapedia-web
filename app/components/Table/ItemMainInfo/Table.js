import styled from 'styled-components';

const Table = styled.table`
  color: #1d1d1f;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 40px;

  .tableCell {
    background: rgba(191, 191, 191, 0.8);
    padding: 2px 10px;
    border-top: 2px solid white;
  }

  td:first-child {
    border-right: 2px solid white;
  }
`;

export default Table;
