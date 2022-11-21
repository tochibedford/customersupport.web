import React, { useState } from "react";
import styles from "./history.module.scss";
import Filter from "./components/Filter/Filter";
import Sidebar from "../../components/SideBar/Sidebar";

export default function History() {
  const [show, setShow] = useState(true);

  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.history}>
        <Filter
          grid={() => setShow(true)}
          list={() => setShow(false)}
          show={show}
        />
      </div>
    </div>
  );
}
