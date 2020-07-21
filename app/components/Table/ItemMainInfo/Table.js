import styled from 'styled-components';

const Table = styled.table`
  color: #1d1d1f;
  border-collapse: collapse;
  width: 100%;

  .tableCell {
    background: rgba(191, 191, 191, 0.8);
    padding: 2px 10px;
    border-top: 2px solid white;
  }

  td:first-child {
    border-right: 2px solid white;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .tableCell {
      padding: 2px 5px;
    }
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    .tableCell {
      padding: 2px 3px;
    }
    font-size: 0.8rem;
  }
`;

export default Table;
