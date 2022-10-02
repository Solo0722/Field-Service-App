import { Button, List } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/GlobalContext";
import AddToReport from "./AddToReport";

const MonthlyOverview = () => {
  const { monthlyReport } = useContext(AppContext);

  return (
    <ReportCardWrapper>
      <h2>Monthly Overview</h2>
      <h3>
        <span>{monthlyReport.month}</span>
        <span>&nbsp;</span>
        <span>{monthlyReport.year}</span>
      </h3>
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
          <p>{monthlyReport.goal}</p>
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
              color: `${
                monthlyReport.hours >= monthlyReport.goal ? "green" : "red"
              }`,
            }}
          >
            {monthlyReport.hours}
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
          <p>{monthlyReport.placements}</p>
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
          <p>{monthlyReport.videos}</p>
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
          <p>{monthlyReport.return_visits}</p>
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
          <p>{monthlyReport.bible_studies}</p>
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
    </ReportCardWrapper>
  );
};

const ReportCardWrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  /* padding: 10px; */
  display: inline-block;
  cursor: pointer;
  margin: 30px 0;

  h2,
  h3 {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export default MonthlyOverview;
