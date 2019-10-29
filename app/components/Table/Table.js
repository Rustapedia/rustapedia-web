import styled from 'styled-components';

const Table = styled.table`
  color: #1d1d1f;
  border-collapse: separate;
  border-spacing: 10px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);

  .tableCell {
    background: rgba(0, 0, 0, 0.2);
    padding: 5px;
  }

  .center {
    text-align: center;
  }
`;

export default Table;
