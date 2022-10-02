import React, { useContext } from "react";
import styled from "styled-components";
import MonthlyOverview from "../components/MonthlyOverview";
import Greetings from "../components/Greetings";
import { AppContext } from "../context/GlobalContext";

const Home = () => {
  const { bibleStudents, territories } = useContext(AppContext);

  return (
    <HomeContainer>
      <Greetings />
      <MonthlyOverview />
      <h2>Bible Students</h2>
      {bibleStudents == [] || bibleStudents == null || !bibleStudents.length ? (
        <p>There are no bible students</p>
      ) : (
        <StudentsContainer>
          {bibleStudents.map((bs, i) => (
            <BibleStudentsWrapper key={i}>
              <h3>{bs.name}</h3>
              <p>
                <span>Status:</span> {bs.status}
              </p>
              <p>
                <span>Location:</span> {bs.location}
              </p>
            </BibleStudentsWrapper>
          ))}
        </StudentsContainer>
      )}

      <h2 style={{ marginTop: "30px" }}>Territories</h2>
      {territories == [] || territories == null || !territories.length ? (
        <p>There are no terrritories</p>
      ) : (
        <StudentsContainer>
          {territories.map((ts, i) => (
            <BibleStudentsWrapper key={i}>
              <h3>{ts.name}</h3>
              <p>{ts.location}</p>
            </BibleStudentsWrapper>
          ))}
        </StudentsContainer>
      )}
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
  position: relative;
  width: 220px;
  height: 200px;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin-top: 20px;
  margin-right: 10px;
  cursor: pointer;
  padding: 10px;

  span,
  h3 {
    font-weight: bold;
  }
`;
export default Home;
