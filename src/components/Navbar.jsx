import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/GlobalContext";
import Drawerbar from "./Drawerbar";

const Navbar = () => {
  const { publisher } = useContext(AppContext);

  return (
    <NavWrapper>
        <Drawerbar />
        <img src="/daily-tasks.png" width={30} height={30} alt="logo" />
      <ToolsContainer>
        <Avatar
          children={publisher?.slice(0, 1)}
          alt={<UserOutlined />}
          style={{ background: "#fff", color: "#000" }}
          size="small"
        />
      </ToolsContainer>
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

  h3 {
    color: #fff;
    font-weight: bolder;
  }
`;

const ToolsContainer = styled.div``;

export default Navbar;
