import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 3;
  width: 100%;
  margin-bottom: 30px;
  background: rgb(45, 45, 45);
  .btn-menu {
    display: none;
  }
  .flex-1 {
    flex: 1 1 25%;
  }
  .flex-2 {
    flex: 1 1 75%;
  }
  .header-search {
    margin: 6px 0;
  }
  .header {
    max-width: 980px;
    margin: 0 auto;
    display: flex;
  }
  .ui.menu {
    min-height: 0;
  }
  .ui.category.search .results {
    width: 180%;
    left: 0%;
  }
  .ui.menu,
  .active.item:hover,
  .ui.vertical.menu .active.item:hover,
  .ui.menu .active.item,
  .ui.menu .dropdown.item:hover,
  .ui.menu .link.item:hover,
  .ui.vertical.menu {
    border-radius: 0;
    background: transparent;
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
  .ui.menu {
    margin: 0;
  }
  .ui.menu .active.item: hover, .ui.menu .dropdown.item: hover,
    .ui.menu .link.item: hover {
    color: #4183c4;
  }
  .ui.menu .item,
  .ui.menu .ui.dropdown .menu > .item {
    padding: 0 !important;
  }
  .ui.menu .item > i.dropdown.icon {
    margin: 0;
  }
  .ui.menu .item a,
  .ui.dropdown > .text,
  .ui.vertical.menu .item > i.icon {
    padding: 0.92857143em 1.14285714em;
  }
  .ui.menu .ui.dropdown .menu > .item a {
    padding: 0.78571429em 1.14285714em !important;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .ui.menu .item a,
    .ui.dropdown > .text,
    .ui.vertical.menu .item > i.icon {
      padding: 0.92857143em 0.8em;
    }
  }
  @media (max-width: 480px) {
    .header-search {
      margin: 10px 0;
    }
    .gray-background {
      background: rgb(45, 45, 45);
    }
    .ui.menu.mobile {
      padding: 5px;
    }
    .hidden-menu {
      position: fixed;
      width: 100%;
      top: -120px;
      flex-direction: column;
      z-index: -1 !important;
      transition: all 0.4s ease-in-out;
      -moz-transition: all 0.6s ease-in-out;
      -webkit-transition: all 0.6s ease-in-out;
    }
    .ui.menu .dropdown.item > .icon {
      float: right;
      content: '\f0da';
      margin-left: 1em;
    }
    .ui.dropdown > .dropdown.icon:before {
      content: '\f0da';
    }
    .ui.menu .item:before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: rgba(34, 36, 38, 0.1);
    }
    .ui.menu .dropdown.item:not(.upward) .menu {
      top: 50px;
    }
    .ui.menu .dropdown.item .menu {
      position: fixed;
      left: 40%;
      margin: 0;
      height: 100vh;
      -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
      border-radius: 0 0.28571429rem 0.28571429rem 0.28571429rem;
    }
    .btn-menu {
      display: block;
      border: 2px solid rgba(255, 255, 255, 0.9);
      background-color: transparent;
      padding: 5px;
      cursor: pointer;
      width: 40px;
      position: absolute;
      right: 10px;
      top: 6.5px;
    }
    .btn-menu span {
      display: block;
      height: 3px;
      background-color: rgba(255, 255, 255, 0.9);
      transition: all 0.1s linear 0.23s;
      -moz-transition: all 0.1s linear 0.23s;
      -webkit-transition: all 0.1s linear 0.23s;
      position: relative;
    }
    .btn-menu span:nth-child(n + 2) {
      margin-top: 7px;
    }
    .show {
      visibility: visible;
      top: 50px;
      width: 100%;
      height: 100vh;
      overflow-y: hidden;
      background: rgb(45, 45, 45) !important;
    }
    .ui.menu .item,
    .ui.menu .active.item {
      margin: 0;
    }
    .rotate-firstLine {
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 10px;
    }
    .rotate-secondLine {
      opacity: 0;
    }
    .rotate-thirdLine {
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
      top: -10px;
    }
  }
`;

export default Wrapper;
