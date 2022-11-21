import React from "react";
import bannerImage from "../Assets/image-1.jpg";
import { BsSearch } from "react-icons/bs";
import style from "../Style/banner.module.scss";

function Banner() {
  return (
    <div className={style.problem_solvers}>
      <img src={bannerImage} alt="" />
      <div className={style.problem_solvers_container}>
        <h1>We are looking for briliant problem solvers</h1>
        <div className={style.input_containers}>
          <div className={style.input}>
            <BsSearch className={style.icon} />
            <input type="text" placeholder="Search by Team" />
          </div>
          <div className={style.input}>
            <BsSearch className={style.icon} />
            <input type="text" placeholder="Search by Location" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
