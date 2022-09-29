import React, { createContext, useContext, useEffect, useState } from "react";
import { months } from "../utils/data";
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
