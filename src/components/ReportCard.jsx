import { Button, List, InputNumber, message } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import AddToReport from "./AddToReport";
import { AppContext } from "../context/GlobalContext";

const ReportCard = ({ report }) => {
  const { monthlyReport, setMonthlyReport } = useContext(AppContext);

  const setGoal = (g) => {
    setMonthlyReport({
      ...monthlyReport,
      goal: parseInt(g),
    });
    message.info("Refresh to see updates");
  };

  return (
    <ReportCardContainer>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <h3>
          {report.month} {report.year}
        </h3>
      </div>
      <List>
        <List.Item
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            margin: "0px",
            marginBottom: "0px",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        >
          <p>Goal</p>
          {/* <p>{report.goal}</p> */}
          <InputNumber
            placeholder={"Enter goal"}
            onChange={(e) => setGoal(e)}
            value={report.goal}
          />
        </List.Item>
        <List.Item
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            margin: "0px",
            marginBottom: "0px",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        >
          <p>Hours</p>
          <p
            style={{
              color: `${report.hours >= report.goal ? "green" : "red"}`,
            }}
          >
            {report.hours}
          </p>
        </List.Item>
        <List.Item
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            margin: "0px",
            marginBottom: "0px",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        >
          <p>Placements</p>
          <p>{report.placements}</p>
        </List.Item>
        <List.Item
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            margin: "0px",
            marginBottom: "0px",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        >
          <p>Videos</p>
          <p>{report.videos}</p>
        </List.Item>
        <List.Item
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            margin: "0px",
            marginBottom: "0px",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        >
          <p>Return Visits</p>
          <p>{report.return_visits}</p>
        </List.Item>
        <List.Item
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            margin: "0px",
            marginBottom: "0px",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        >
          <p>Bible Studies</p>
          <p>{report.bible_studies}</p>
        </List.Item>
        <List.Item
          style={{
            paddingTop: "10px",
            margin: "0px",
            display: "flex",
            justifyContent: "left",
          }}
        >
          <AddToReport />
          <Button type="link" style={{ textTransform: "uppercase" }}>
            Copy report
          </Button>
        </List.Item>
      </List>
    </ReportCardContainer>
  );
};

const ReportCardContainer = styled.div`
  width: 100%;
  min-height: 300px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  /* padding: 10px; */
  display: inline-block;
  cursor: pointer;
  margin: 20px 0;

  h2,
  h3 {
    font-weight: bold;
  }

  p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export default ReportCard;
