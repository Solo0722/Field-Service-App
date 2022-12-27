import React from "react";
import styled from "styled-components";
import Drawerbar from "./Drawerbar";

const Navbar = () => {
  return (
    <NavWrapper>
      <Drawerbar />
      <div>
        <img src="/daily-tasks.png" width={30} height={30} alt="logo" />
        <span>Ministry Assistant</span>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  height: 50px;
  width: 100%;
  background-color: #00bb;
  backdrop-filter: blur(10px);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.05) 0px 2px 4px -1px;
  padding: 0px 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 100;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    color: #fff;
    font-weight: bolder;
  }

  span {
    color: #fff;
    margin-left: 7px;
    font-weight: bold;
  }
`;
export default Navbar;
