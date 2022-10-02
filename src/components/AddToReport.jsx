import React, { useContext, useState } from "react";
import { Button, Form, Modal, Input, List, DatePicker, message } from "antd";
import { AppContext } from "../context/GlobalContext";
import { cookies } from "../utils/data";
import moment from "moment";

const AddToReport = () => {
  const { monthlyReport, setMonthlyReport, reportHistory, setReportHistory } =
    useContext(AppContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [reportData, setReportData] = useState({
    date: null,
    hours: 0,
    placements: 0,
    videos: 0,
    bible_studies: 0,
    return_visits: 0,
  });

  const repo = [
    {
      name: "Hours",
      inputName: "hours",
      value: reportData.hours,
    },
    {
      name: "Placements",
      inputName: "placements",
      value: reportData.placements,
    },
    {
      name: "Videos",
      inputName: "videos",
      value: reportData.videos,
    },
    {
      name: "Return visits",
      inputName: "return_visits",
      value: reportData.return_visits,
    },
    {
      name: "Bible studies",
      inputName: "bible_studies",
      value: reportData.bible_studies,
    },
  ];

  const increment = (e) => {
    setReportData({ ...reportData, [e.inputName]: e.value + 1 });
  };
  const decrement = (e) => {
    setReportData({ ...reportData, [e.inputName]: e.value - 1 });
  };

  const handleDateChange = (e) => {
    setReportData({ ...reportData, date: e._d });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleSubmit = () => {
    setIsModalVisible(false);
    setReportHistory([...reportHistory, reportData]);
    setMonthlyReport({
      ...monthlyReport,
      hours: monthlyReport.hours + reportData.hours,
      placements: monthlyReport.placements + reportData.placements,
      videos: monthlyReport.videos + reportData.videos,
      return_visits: monthlyReport.return_visits + reportData.return_visits,
      bible_studies: monthlyReport.bible_studies + reportData.bible_studies,
    });
    message.info("Refresh to see updates");
  };

  return (
    <>
      <Button
        type="link"
        style={{ textTransform: "uppercase" }}
        onClick={showModal}
      >
        Add to report
      </Button>
      <Modal
        title="Add to report"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleSubmit}
      >
        <List>
          {repo.map((r, i) => (
            <List.Item
              key={i}
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                margin: "0px",
                marginBottom: "0px",
                paddingTop: "2px",
                paddingBottom: "2px",
              }}
            >
              <p>{r.name}</p>
              <Button.Group>
                <Button type="primary" onClick={() => decrement(r)}>
                  -
                </Button>
                <Input type="button" value={r.value} name={r.inputName} />
                <Button type="primary" onClick={() => increment(r)}>
                  +
                </Button>
              </Button.Group>
            </List.Item>
          ))}
          <List.Item>
            <p>Date</p>
            <DatePicker onChange={handleDateChange} />
          </List.Item>
        </List>
      </Modal>
    </>
  );
};
export default AddToReport;
