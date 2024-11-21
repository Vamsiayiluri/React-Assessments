import React from "react";
import { Link } from "react-router-dom";
import styles from "./jobcard.module.css";
function JobCard({ job }) {
  return (
    <div className={styles.jobCard}>
      <h3>{job.title}</h3>
      <p>
        {job.company} - {job.location}
      </p>
      <Link to={`/jobs/${job.id}`}>
        <button className={styles.viewbutton}>View Details</button>
      </Link>
    </div>
  );
}

export default JobCard;
