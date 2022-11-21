import React from "react";
import styles from "./list.module.scss";
import image from "../../icons/callImage.png";

function List(props) {
  let color = [];
  if (props.analysis === "Positive") {
    color.push(styles.positiveColor);
  } else if (props.analysis === "Negative") {
    color.push(styles.negativeColor);
  } else {
    color.push(styles.neutralColor);
  }

  return (
    <div className={styles.list__container}>
      <table>
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
            <h4 className={color}>{props.analysis}</h4>
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
