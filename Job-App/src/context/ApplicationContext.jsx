import React, { createContext, useContext, useState } from "react";

// Create a Context
const ApplicationContext = createContext();

// Create a Provider Component
export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);

  const submitApplication = (applicationData) => {
    setApplications((prevApplications) => [
      ...prevApplications,
      applicationData,
    ]);
  };

  return (
    <ApplicationContext.Provider value={{ applications, submitApplication }}>
      {children}
    </ApplicationContext.Provider>
  );
};

// Custom hook to use the ApplicationContext
export const useApplications = () => useContext(ApplicationContext);
