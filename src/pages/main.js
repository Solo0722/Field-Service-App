import React from "react";
import { Routes, Route } from "react-router-dom";
import { BibleStudents, Home, Reports,  Territories } from "../routes";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const Main = () => {
  return (
    <>
      <Navbar />
      <MainWrapper>
        <Sidebar />
        <RoutesWrapper>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/bible-students" element={<BibleStudents />} />
            <Route path="/territories" element={<Territories />} />
          </Routes>
        </RoutesWrapper>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const RoutesWrapper = styled.div`
  padding: 1rem;
  width: 80%;
  float: right;
  min-height: calc(100vh - 50px);
  position: absolute;
  top: 50px;
  left: 20%;

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      left: 0%;
    }
  }
`;

export default Main;
