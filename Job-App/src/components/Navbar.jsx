import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.navBar}>
      <Link to="/">Home</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/applications">Applications</Link>
    </nav>
  );
}

export default Navbar;
