import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { months } from "../utils/data";
import { useLocalStorage } from "../utils/hooks";
import moment from "moment";

export const AppContext = createContext();

const GlobalContext = ({ children }) => {
  const year = moment().format("YYYY");
  const month = moment().format("MMMM");
  const [publisher, setPublisher] = useLocalStorage("publisher", null);
  console.log(moment())

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
    if (moment().endOf("month").date() === moment(new Date()).date()) {
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
