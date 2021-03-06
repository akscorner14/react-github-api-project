import React from "react";
import styles from "./resultGrid.module.css";

import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";

export default function ResultGrid({ handleDelete, searchResult }) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {searchResult.map((each) => (
          <Link className="link" to={each.login} key={each.login}>
            <ProfileCard handleDelete={handleDelete} info={each} />
          </Link>
        ))}
      </div>
    </div>
  );
}
