import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  &.padding {
    padding: 0 2%;
  }
  &.flex-wrap {
    display: flex;
    flex-flow: row wrap-reverse;
  }
  .center {
    text-align: center;
  }
  &.itemInfo {
    margin: 30px auto;
    margin-top: 0;
  }
  .padding {
    padding-left: 3%;
  }
  @media (min-width: 481px) and (max-width: 768px) {
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
