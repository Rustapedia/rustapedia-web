import styled from 'styled-components';

const Table = styled.table`
  color: #1d1d1f;
  border-collapse: separate;
  border-spacing: 10px;
  width: 100%;
  background-color: rgba(191, 191, 191, 0.4);

  .tableCell {
    background: rgba(191, 191, 191, 0.8);
  }
  .container {
    display: flex;
    align-items: center;
    flex-wrap: no-wrap;
  }
  .small-font {
    font-size: 0.8rem;
  }
  .marginLeft {
    margin-left: 5px;
  }
  .durability button:nth-child(n + 2) {
    margin-left: 20px;
  }
  .center {
    text-align: center;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    border-spacing: 6px;
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
    border-spacing: 4px;
    .marginLeft {
      margin-left: 2px;
    }
  }
`;

export default Table;
