import React from "react";
import closeIcon from "./imgs/closeIcon.svg";
import dropdown_arr from "./imgs/dropdownArr.svg";
import logo from "./imgs/logo.svg";
import usrAvatar from "./imgs/user_avatar.svg";
import styles from "./uploadedsidebar.module.scss";

const UploadedSidebar = () => {
  return (
    <div className={styles.UploadedSidebar}>
      <div className={styles.UploadedSidebar_header}>
        <div className={styles.UploadedSidebar_header_logo_vs_closeIcon}>
          <img src={logo} alt="logo" className={styles.logo} />
          <img
            src={closeIcon}
            alt="closeIcon"
            className={styles.SdiebarcloseIcon}
          />
        </div>
      </div>
      <div className={styles.UploadedSidebar__bottom}>
        <div className={styles.UploadedRecNavbar_user_desktop}>
          <img src={usrAvatar} alt="john doe" />
          <div className={styles.UploadedRecNavbar_user_desktop_nameDetails}>
            <div className={styles.UploadedRecNavbar_user_desktop_name_arr}>
              <p className={styles.name}>John Doe</p>
              <img src={dropdown_arr} alt="dropdown arrow" />
            </div>
            <p className={styles.workspace_name}>Office workspace</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadedSidebar;
