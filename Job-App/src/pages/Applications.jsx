import React from "react";
import styles from "./applications.module.css";

function Applications({ applications }) {
  if (applications.length === 0) {
    return (
      <div className={styles.noapplicationsText}>
        No applications submitted yet.
      </div>
    );
  }

  return (
    <div className={styles.applicationsContainer}>
      <h1>Your Applications</h1>
      <ul className={styles.applicationsList}>
        {applications.map((application, index) => (
          <li className={styles.applicationListItem} key={index}>
            <h3>
              {application.jobTitle} at {application.company}
            </h3>

            <p>Name: {application.name}</p>
            <p>Email: {application.email}</p>
            <p>Location: {application.location}</p>
            <p>
              Resume:{" "}
              <a href={URL.createObjectURL(application.resume)} download>
                Download
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Applications;
