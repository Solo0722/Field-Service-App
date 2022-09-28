import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Auth from "./pages/auth";
import GlobalContext from "./context/GlobalContext";

function App() {
  return (
    <Router>
      <GlobalContext>
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </GlobalContext>
    </Router>
  );
}

export default App;
