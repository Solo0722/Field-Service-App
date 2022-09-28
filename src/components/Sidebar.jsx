import React from "react";
import styled from "styled-components";
import { RenderLinks } from "../utils/data";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <RenderLinks />
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 20%;
  float: left;
  min-height: calc(100vh - 50px);
  background: #f8f8ff;
  padding-top: 10px;
  position: fixed;
  top: 50px;

  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export default Sidebar;
