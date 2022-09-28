import { MoreOutlined } from "@ant-design/icons";
import { Button, List, Dropdown, Menu, Form, Modal, Input } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AddToReport from "./AddToReport";

const ReportCard = ({ report }) => {
  const navigate = useNavigate();

  const reportMenu = (
    <Menu
      items={[
        {
          key: "1",
          label: <a rel="noopener noreferrer">Set goal</a>,
        },
        {
          key: "2",
          label: <a rel="noopener noreferrer">Delete goal</a>,
        },
      ]}
    />
  );

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
        <Dropdown trigger="click" overlay={reportMenu}>
          <Button
            icon={<MoreOutlined />}
            type={"text"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          />
        </Dropdown>
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
          {/* Monthly Goal */}
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
          <p>{report.hours}</p>
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
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
