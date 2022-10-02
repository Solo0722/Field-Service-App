import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { months, monthEndings } from "../utils/data";
import { useLocalStorage } from "../utils/hooks";

export const AppContext = createContext();

const GlobalContext = ({ children }) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const [publisher, setPublisher] = useLocalStorage("publisher", null);

  const [monthlyReport, setMonthlyReport] = useLocalStorage("monthlyReport", {
    month,
    year,
    goal: 0,
    hours: 0,
    placements: 0,
    videos: 0,
    return_visits: 0,
    bible_studies: 0,
  });

  const [reportHistory, setReportHistory] = useLocalStorage(
    "reportHistory",
    []
  );

  const [reportsKeeper, setReportsKeeper] = useLocalStorage(
    "reportsKeeper",
    []
  );

  const [bibleStudents, setBibleStudents] = useLocalStorage(
    "bibleStudents",
    []
  );
  const [territories, setTerritories] = useLocalStorage("territories", []);

  const [yearlyReport, setYearlyReport] = useState([monthlyReport]);

  useEffect(() => {
    if (date.getDate() == monthEndings(month) && date.getHours() == 23) {
      setReportsKeeper([...reportsKeeper, monthlyReport]);
      setMonthlyReport({
        month,
        year,
        goal: 0,
        hours: 0,
        placements: 0,
        videos: 0,
        return_visits: 0,
        bible_studies: 0,
      });
    }
  }, [monthlyReport]);

  useEffect(() => {
    !publisher &&
      setMonthlyReport({
        month,
        year,
        goal: 0,
        hours: 0,
        placements: 0,
        videos: 0,
        return_visits: 0,
        bible_studies: 0,
      });
    !publisher && setReportHistory([]);
    !publisher && setBibleStudents([]);
    !publisher && setTerritories([]);
  }, [publisher]);

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
