import React from "react";
import Banner from "./Banner";
import style from "../Style/notHiring.module.scss";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";

function NotHiring() {
  return (
    <div>
      <NavBar />
      <Banner />
      <div className={style.not_hiring_container}>
        <div className={style.not_hiring}>
          <h1>We are currently not hiring!</h1>
          <p>
            There are currently no open positions, however you can join our
            newsletter to get updated on our company and future opportunities.{" "}
          </p>
        </div>
        <div className={style.subscribe}>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Enter Email address" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotHiring;
