import styled from 'styled-components';

const Wrapper = styled.div`
  width: 25%;
  padding: 3px;
  @media (min-width: 481px) and (max-width: 768px) {
    width: 33.3%;
  }
  @media (max-width: 480px) {
    width: 50%;
  }
`;

export default Wrapper;
