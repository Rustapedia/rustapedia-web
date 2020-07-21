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
  &.infoIcon {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
  &.water {
    width: 22px;
    height: 22px;
  }
  &.icon {
    width: 22px;
    height: 22px;
    margin-right: 7px;
    margin-bottom: 5px;
  }
  &.arrow {
    margin: 0 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 180px;
    height: 180px;
    &.small {
      width: 50px;
      height: 50px;
    }
    &.ingredients {
      width: 35px;
      height: 35px;
    }
    &.arrow {
      margin: 0 7px;
    }
  }
  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
    &.ingredients {
      width: 30px;
      height: 30px;
    }
    &.small {
      width: 45px;
      height: 45px;
    }
    &.arrow {
      margin: 0 5px;
    }
  }
`;

export default Img;
