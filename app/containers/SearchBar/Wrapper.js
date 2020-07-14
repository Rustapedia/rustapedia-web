import styled from 'styled-components';

const Wrapper = styled.div`
  .ui.category.search > .results .category .result,
  .ui.category.search > .results .category .result a {
    padding: 0;
  }
  .ui.category.search > .results .category .result {
    padding: 2px;
  }
  .header-search .ui.input > input {
    width: 20px;
    height: 30px;
  }
  .header-search .ui a {
    color: rgba(0, 0, 0, 0.87);
  }
  .header-search .ui.input > input:focus {
    width: 180px;
    transition: width 0.5s linear;
  }
`;

export default Wrapper;
