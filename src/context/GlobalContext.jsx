import React, { createContext, useContext, useEffect, useState } from "react";
import { cookies, months } from "../utils/data";

export const AppContext = createContext();

const GlobalContext = ({ children }) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const [publisher, setPublisher] = useState(
    !cookies.get("publisherName") ? null : cookies.get("publisherName")
  );

  const [monthlyReport, setMonthlyReport] = useState({
    month,
    year,
    hours: !cookies.get("monthlyReport")
      ? 0
      : cookies.get("monthlyReport").hours,
    placements: !cookies.get("monthlyReport")
      ? 0
      : cookies.get("monthlyReport").placements,
    videos: !cookies.get("monthlyReport")
      ? 0
      : cookies.get("monthlyReport").videos,
    return_visits: !cookies.get("monthlyReport")
      ? 0
      : cookies.get("monthlyReport").return_visits,
    bible_studies: !cookies.get("monthlyReport")
      ? 0
      : cookies.get("monthlyReport").bible_studies,
  });

  const [reportHistory, setReportHistory] = useState(
    !cookies.get("reportHistory") ? [] : cookies.get("reportHistory")
  );

  useEffect(() => {
    cookies.set("publisherName", publisher);
  }, [publisher]);

  useEffect(() => {
    cookies.set("monthlyReport", monthlyReport);
  }, [monthlyReport]);

  useEffect(() => {
    cookies.set("reportHistory", reportHistory);
  }, [reportHistory]);

  const [yearlyReport, setYearlyReport] = useState([
    monthlyReport,
    monthlyReport,
    monthlyReport,
    monthlyReport,
  ]);

  const [bibleStudents, setBibleStudents] = useState([]);
  const [territories, setTerritories] = useState([]);

  return (
    <AppContext.Provider
      value={{
        publisher,
        monthlyReport,
        reportHistory,
        yearlyReport,
        bibleStudents,
        territories,
        setTerritories,
        setBibleStudents,
        setYearlyReport,
        setReportHistory,
        setMonthlyReport,
        setPublisher,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default GlobalContext;
