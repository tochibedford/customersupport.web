import React, { useState } from "react";
import Grid from "./components/GridView/Grid";
import data from "./HistoryData";
import styles from "./history.module.scss";
import List from "./components/ListView/List";
import ListHeader from "./components/ListHeader/ListHeader";
import Filter from "./components/Filter/Filter";
import Sidebar from "../../components/SideBar/Sidebar";

export default function History() {
  const recordGrid = data.map((item) => (
    <Grid
      name={item.name}
      agent={item.agent}
      analysis={item.analysis}
      date={item.date}
    />
  ));

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

  const [show, setShow] = useState(true);

  if (!show) {
    return recordList;
  }

  return (
    <div className={styles.history}>
      <h1>Record History</h1>
      <div className={styles.history__nav}>
        <div>
          <button onClick={() => setShow(true)} className={styles.option__grid}>
            Grid
          </button>
          <button
            onClick={() => setShow(false)}
            className={styles.option__list}
          >
            List
          </button>
          {/* <select className={styles.select} name="Grid" id="">
            <option
              className={styles.option__grid}
              onClick={() => setShow(false)}
              value="Grid"
            >
               Grid
            </option>
            <option
              className={styles.option__list}
              onClick={() => setShow(true)}
              value="List"
            >
              List
            </option>
          </select> */}
        </div>
        <div className={styles.history__nav2}>
          <select className={styles.select} name="filter" id="">
            <option value="all records">All records</option>
          </select>
          <select className={styles.select} name="date" id="">
            <option value="date">Date Added</option>
          </select>
        </div>
      </div>
      <hr />
      {/* <Filter onClose={() => setShow(false)} show={show} /> */}
      <div className={styles.record}>{recordGrid}</div>
      <div className={styles.list__div}>
        <ListHeader />
        {recordList}
      </div>
    </div>
  );
}
