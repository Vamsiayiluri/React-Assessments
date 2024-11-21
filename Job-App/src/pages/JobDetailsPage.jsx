// src/pages/JobDetailsPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import jobs from "../data/jobData";
import styles from "./jobDetailsPage.module.css";
function JobDetailsPage() {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) return <h2>Job Not Found</h2>;

  return (
    <div className={styles.jobDetails}>
      <h1>{job.title}</h1>
      <h2>{job.company}</h2>
      <p>{job.location}</p>
      <Link to={`/apply/${job.id}`}>
        <button className={styles.applyButton}>Apply Now</button>
      </Link>
    </div>
  );
}

export default JobDetailsPage;
