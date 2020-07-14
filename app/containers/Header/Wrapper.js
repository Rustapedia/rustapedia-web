import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 2;
  margin-bottom: 30px;
  width: 100%;
  background: rgb(45, 45, 45);

  .ui.menu,
  .active.item:hover,
  .ui.vertical.menu .active.item:hover,
  .ui.menu .active.item,
  .ui.menu .dropdown.item:hover,
  .ui.menu .link.item:hover,
  .ui.vertical.menu {
    border-radius: 0;
    max-width: 980px;
    background: transparent;
    margin: 0 auto;
    border: none;
  }
  .ui.vertical.menu {
    box-shadow: none;
  }
  .ui.menu .item,
  .ui.menu .active.item {
    margin: 0 auto;
    color: #fff;
  }
  .ui.menu .active.item: hover, .ui.menu .dropdown.item: hover,
    .ui.menu .link.item: hover {
    color: #4183c4;
  }
  .ui.menu .item,
  .ui.menu .ui.dropdown .menu > .item {
    padding: 0 !important;
  }
  .ui.menu .item a,
  .ui.dropdown > .text,
  .ui.vertical.menu .item > i.icon {
    padding: 0.92857143em 1.14285714em;
  }
  .ui.menu .ui.dropdown .menu > .item a {
    padding: 0.78571429em 1.14285714em !important;
  }
`;

export default Wrapper;
