import React from "react";
import TableData from "./TableData";
import UploadedNavbar from "./UploadedNavbar";
import styles from "./uploadedRecordings.module.scss";
import UploadedSidebar from "./UploadedSidebar";

function UploadedRecordings() {
  return (
    <div className={styles.uploadedRecordingsParent}>
      <UploadedSidebar />
      <div className={styles.uploadedRecordingsCol}>
        <div className={styles.uploadedRecordingsSideBar}>
          <UploadedNavbar />
        </div>
        <TableData />
      </div>
    </div>
  );
}

export default UploadedRecordings;
