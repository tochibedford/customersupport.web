import React from "react";
import CallImage from "../../icons/callImage.png";
import styles from "./grid.module.scss";

function Grid(props) {
  let color = [];
  if (props.analysis === "Positive") {
    color.push(styles.positiveColor);
  } else if (props.analysis === "Negative") {
    color.push(styles.negativeColor);
  } else {
    color.push(styles.neutralColor);
  }

  return (
    <div className={styles.card}>
      <div className={styles.filename}>
        <img src={CallImage} alt="" />
        <div className={styles.filename__text}>
          <h5>{props.name}</h5>
          <p className={styles.paragraph}>{props.agent}</p>
        </div>
      </div>
      <div className={styles.analysis}>
        <h5 className={color}>{props.analysis}</h5>
        <p className={styles.paragraph}>{props.date}</p>
      </div>
    </div>
  );
}

export default Grid;
