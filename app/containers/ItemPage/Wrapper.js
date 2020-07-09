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
`;

export default Wrapper;
