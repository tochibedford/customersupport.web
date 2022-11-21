import React from "react";
import styles from "./list.module.scss";
import image from "../../icons/callImage.png";

function List(props) {
  return (
    <div
      className={`styles.listbox ${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <table className={styles.table}>
        <tr className={styles.table__row}>
          <td className={styles.checkbox}>
            <input type="checkbox" name="file" id="" />
          </td>
          <td className={styles.name}>
            <div className={styles.record__image_div}>
              <img className={styles.image} src={image} alt="" />
              <h4>{props.name}</h4>
            </div>
          </td>
          <td className={styles.table__data_agent}>{props.agent}</td>
          <td className={styles.analysis}>
            <h4>{props.analysis}</h4>
          </td>
          <td className={styles.date}>
            {props.date} {props.time}
          </td>
          <td className={styles.lenght}>{props.lenght}</td>
        </tr>
      </table>
    </div>
  );
}

export default List;
