import { Button } from "antd";
import React, { useEffect } from "react";
import styled from "styled-components";
import { MoreOutlined } from "@ant-design/icons";
import MonthlyOverview from "../components/MonthlyOverview";
import Greetings from "../components/Greetings";

const bible_students = [
  {
    name: "Solomon",
    location: "Kentinkrono",
    study_publication: "Teach us",
  },
  {
    name: "Solomon",
    location: "Kentinkrono",
    study_publication: "Teach us",
  },
  {
    name: "Solomon",
    location: "Kentinkrono",
    study_publication: "Teach us",
  },
];

const Home = () => {
  return (
    <HomeContainer>
      <Greetings />
      <MonthlyOverview />
      <h2>Bible Students</h2>
      <StudentsContainer>
        {bible_students.map((bs) => (
          <BibleStudentsWrapper>
            <h3>{bs.name}</h3>
            <p>{bs.location}</p>
            <Button
              type="text"
              icon={<MoreOutlined />}
              style={{ position: "absolute", top: "10px", right: "10px" }}
            />
          </BibleStudentsWrapper>
        ))}
      </StudentsContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;

  h2 {
    margin-top: 15px;
  }
`;

const StudentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const BibleStudentsWrapper = styled.div`
  /* width: 100%; */
  position: relative;
  width: 240px;
  height: 200px;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  /* padding: 10px; */
  /* display: inline-block; */
  margin-top: 20px;
  margin-right: 10px;
  cursor: pointer;
  padding: 10px;
`;
export default Home;
