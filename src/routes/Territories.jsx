import React, { useContext } from "react";
import styled from "styled-components";
import EmptyField from "../components/EmptyField";
import { AppContext } from "../context/GlobalContext";

const Territories = () => {
  const { territories, setTerritories } = useContext(AppContext);

  return (
    <TerritoriesWrapper>
      <h2>Territories</h2>
      {territories.length == 0 ? (
        <EmptyField
          title={"territories"}
          buttonStatement={"Add a new territory"}
        />
      ) : (
        <div>Filled</div>
      )}
    </TerritoriesWrapper>
  );
};

const TerritoriesWrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  h2 {
    text-align: center;
    margin-top: 15px;
  }
`;

export default Territories;
