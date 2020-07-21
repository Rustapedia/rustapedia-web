import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  .center {
    text-align: center;
  }
  div .size250 {
    width: 250px;
  }
  &.itemInfo {
    margin: 30px auto;
    margin-top: 0;
  }
  .padding {
    padding: 0 5%;
  }
  @media (max-width: 768px) {
    .padding {
      padding: 0 1% 0 3%;
    }
  }
  @media (max-width: 480px) {
    &.itemInfo {
      margin: 20px auto;
      margin-top: 0;
    }
  }
`;

export default Wrapper;
