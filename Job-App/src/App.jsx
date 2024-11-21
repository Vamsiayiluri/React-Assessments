import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import ApplyPage from "./pages/ApplyPage";
import NotFound from "./pages/NotFound";
import Applications from "./pages/Applications";

function App() {
  const [applications, setApplications] = useState([]);
  const submitApplication = (applicationData) => {
    setApplications((prevApplications) => [
      ...prevApplications,
      applicationData,
    ]);
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobDetailsPage />} />
        <Route
          path="/apply/:id"
          element={<ApplyPage submitApplication={submitApplication} />}
        />
        <Route
          path="/applications"
          element={<Applications applications={applications} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
