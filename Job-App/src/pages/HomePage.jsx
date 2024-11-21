// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./homepage.module.css";
function HomePage() {
  return (
    <div>
      <h1>Welcome to the Job Portal, Find your dream job here</h1>
      <Link to="/jobs">
        <button className={styles.buttonLink}>View Jobs</button>
      </Link>
      <Link to="/applications">
        <button className={styles.buttonLink}>View your applications</button>
      </Link>
    </div>
  );
}

export default HomePage;
