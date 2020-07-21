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
  .ui.grid {
    width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .ui.category.search .results {
      width: 22em;
    }
    .ui.category.search > .results .category > .name {
      padding: 0.3em 0.5em;
      width: 60px;
    }
  }
  @media (max-width: 480px) {
    .ui.category.search .results {
      width: 20em;
    }
    .ui.category.search > .results .category > .name {
      padding: 0.2em 0.3em;
      width: 30px;
    }
  }
`;

export default Wrapper;
