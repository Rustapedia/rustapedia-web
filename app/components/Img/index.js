import styled from 'styled-components';

const Img = styled.img`
  width: 240px;
  height: 240px;

  &.small {
    width: 60px;
    height: 60px;
  }

  &.ingredients {
    width: 40px;
    height: 40px;
  }

  &.icon {
    width: 22px;
    height: 22px;
    margin-right: 7px;
    margin-bottom: 5px;
  }
`;

export default Img;
