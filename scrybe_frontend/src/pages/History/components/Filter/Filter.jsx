import React from "react";
import styles from "./filter.module.scss";
import data from "../../HistoryData";
import Grid from "../GridView/Grid";
import ListHeader from "../ListHeader/ListHeader";

function Filter(props) {
  const recordGrid = data.map((item) => (
    <Grid
      name={item.name}
      agent={item.agent}
      analysis={item.analysis}
      date={item.date}
    />
  ));

  return (
    <div className={styles.history}>
      <h1>Analysis History</h1>
      <div className={styles.history__nav}>
        <div>
          <button onClick={props.grid} className={styles.option__grid}>
            Grid
          </button>
          <button onClick={props.list} className={styles.option__list}>
            List
          </button>
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
      <div className={styles.record}>
        {!props.show ? <ListHeader /> : recordGrid}
      </div>
    </div>
  );
}

export default Filter;
