import { Divider, List } from "antd";
import moment from "moment/moment";
import { useContext } from "react";
import styled from "styled-components";
import ReportCard from "../components/ReportCard";
import { AppContext } from "../context/GlobalContext";

const Reports = () => {
  const { yearlyReport, reportHistory } = useContext(AppContext);

  return (
    <ReportsContainer>
      <h2>Reports</h2>
      <Wrapper>
        {yearlyReport.map((report, i) => (
          <ReportCard report={report} key={i} />
        ))}
      </Wrapper>
      {reportHistory && (
        <HistoryWrapper>
          <List>
            {reportHistory.map((rh, i) => (
              <List.Item
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <h4>{moment(rh.date).format("dddd, MMMM D, YYYY")}</h4>
                <p>
                  <span>Hours: {rh.hours}</span>&nbsp;
                  <span>Placements: {rh.placements}</span>&nbsp;
                  <span>Return visits: {rh.return_visits}</span>&nbsp;
                </p>
              </List.Item>
            ))}
          </List>
        </HistoryWrapper>
      )}
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

const HistoryWrapper = styled.div`
  margin: 15px 0;
  width: 100%;
  position: relative;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin-top: 20px;
  padding: 10px;
`;

export default Reports;
