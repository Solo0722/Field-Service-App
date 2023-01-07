import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useLocalStorage } from "../utils/hooks";
import moment from "moment";

export const AppContext = createContext();

const GlobalContext = ({ children }) => {
  let year = moment().format("YYYY");
  let month = moment().format("MMMM");
  const [publisher, setPublisher] = useLocalStorage("publisher", null);
  console.log(moment());

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
    if (
      moment().endOf("month").date() === moment(new Date()).date() &&
      new Date().getHours === 23
    ) {
      year = moment(new Date()).format("YYYY");
      month = moment(new Date()).format("MMMM");
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
  }, [
    month,
    monthlyReport,
    reportsKeeper,
    setMonthlyReport,
    setReportsKeeper,
    year,
  ]);

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
