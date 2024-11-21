// src/pages/JobsPage.js
import React, { useState, useEffect, useContext } from "react";
import JobCard from "../components/JobCard";
import jobs from "../data/jobData"; // Mock Data
import styles from "./jobsPage.module.css";
function JobsPage() {
  const [search, setSearch] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    setFilteredJobs(
      jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(search.toLowerCase()) ||
          job.company.toLowerCase().includes(search.toLowerCase()) ||
          job.location.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div>
      <h1>Jobs</h1>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search by role, company or location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobsPage;
