import React, { createContext, useState } from "react";

const JobContext = createContext();

function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
}

export { JobProvider, JobContext };
