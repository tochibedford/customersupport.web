import React from "react";
import TableData from "./TableData";
import UploadedNavbar from "./UploadedNavbar";
import styles from "./uploadedRecordings.module.scss";
import UploadedSidebar from "./UploadedSidebar";

function UploadedRecordings() {
  const [toggleSidebar, setToggleSidebar] = React.useState(true);
  return (
    <div className={styles.uploadedRecordingsParent}>
      <UploadedSidebar
        toggleSidebar={toggleSidebar}
        closeSidebar={() => setToggleSidebar(!toggleSidebar)}
      />
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
