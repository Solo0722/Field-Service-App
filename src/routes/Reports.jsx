import { useContext } from "react";
import styled from "styled-components";
import ReportCard from "../components/ReportCard";
import { AppContext } from "../context/GlobalContext";

const Reports = () => {
  const { yearlyReport } = useContext(AppContext);

  return (
    <ReportsContainer>
      <h2>Reports</h2>
      <Wrapper>
        {yearlyReport.map((report, i) => (
          <ReportCard report={report} key={i} />
        ))}
      </Wrapper>
    </ReportsContainer>
  );
};

const ReportsContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  h2 {
    text-align: center;
    margin-top: 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default Reports;
