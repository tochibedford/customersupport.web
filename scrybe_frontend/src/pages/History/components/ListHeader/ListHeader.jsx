import React from "react";
import styles from "./listHeader.module.scss";
import List from "../ListView/List";
import data from "../../HistoryData";

function ListHeader() {
  const recordList = data.map((item) => (
    <>
      <List
        name={item.name}
        agent={item.agent}
        analysis={item.analysis}
        date={item.date}
        time={item.time}
        lenght={item.lenght}
      />
    </>
  ));

  return (
    <div className={styles.header}>
      <table className={styles.table}>
        <tr>
          <th className={styles.table__head}>File Name</th>
          <th className={styles.table__head}>Agent</th>
          <th className={styles.table__head}>Sentiment Result</th>
          <th className={styles.table__head}>Date Uploaded</th>
          <th className={styles.table__head}>Lenght</th>
        </tr>
      </table>
      <hr />
      {recordList}
    </div>
  );
}

export default ListHeader;
