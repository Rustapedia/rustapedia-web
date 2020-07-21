import styled from 'styled-components';

const Table = styled.table`
  color: #1d1d1f;
  margin: 30px 0 0 0;
  border-collapse: separate;
  border-spacing: 10px;
  background: rgba(191, 191, 191, 0.4);

  .tableCell {
    padding: 0 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin: 20px 0 0 0;
    border-spacing: 8px;
    .tableCell {
      padding: 0 8px;
    }
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    margin: 10px 0 0 0;
    border-spacing: 4px;
    .tableCell {
      padding: 0 4px;
    }
    font-size: 0.8rem;
  }
`;

export default Table;
