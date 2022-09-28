import { Empty } from "antd";
import { useContext } from "react";
import styled from "styled-components";
import EmptyField from "../components/EmptyField";
import { AppContext } from "../context/GlobalContext";

const BibleStudents = () => {
  const { bibleStudents, setBibleStudents } = useContext(AppContext);

  return (
    <BibleStudentsWrapper>
      <h2>Bible Students</h2>
      {bibleStudents.length == 0 ? (
        <EmptyField
          title={"bible students"}
          buttonStatement={"Add a new student"}
        />
      ) : (
        <div>Filled</div>
      )}
    </BibleStudentsWrapper>
  );
};

const BibleStudentsWrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  h2 {
    text-align: center;
    margin-top: 15px;
  }
`;

export default BibleStudents;
