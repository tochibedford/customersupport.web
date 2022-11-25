import React, { useContext, useState } from "react";
import PersonalInfo from "./PersonalInformationSettings.module.scss";
import RedirectNav from "../../Components/SettingsPageRedirectNav/SettingsPageRedirectNav";
import ProfilePic from "../../assets/images/Pic.png";
import BlueEditPen from "../../assets/icons/blue-pencil.png";
import BlackEditPen from "../../assets/icons/edit.svg";
import { Link } from "react-router-dom";
import Footer from "../../../../components/footer/index";
import AuthContext from "../../AuthContext";

const PersonalInformation = () => {
  const { initialData } = useContext(AuthContext);
  const { handleSubmit } = useContext(AuthContext);
  const [newData, setnewData] = useState({});

  return (
    <>
      <RedirectNav />
      <div className="PersonalInfo-Container">
        <div className={PersonalInfo.PersonalInfo_wrapper}>
          <div className={PersonalInfo.PersonalInfo_header}>
            <img
              className={PersonalInfo.profilePic}
              src={ProfilePic}
              alt="profile pic"
            />
            <div className={PersonalInfo.changeImg}>
              <Link to="">
                <img src={BlueEditPen} alt="pencil icon to edit profile pic" />
                <span>Change profile picture</span>
              </Link>
            </div>
          </div>
          <div className={PersonalInfo.PersonalInfo_form}>
            <form
              action="
							  "
            >
              <div className={PersonalInfo.row}>
                <div className={PersonalInfo.formGroup}>
                  <label htmlFor="">First name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    defaultValue={initialData.first_name}
                    onChange={(e) =>
                      setnewData({
                        ...initialData,
                        first_name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={PersonalInfo.formGroup}>
                  <label htmlFor="">Last name</label>
                  <input
                    type="text"
                    placeholder="John"
                    defaultValue={initialData.last_name}
                    onChange={(e) =>
                      setnewData({
                        ...initialData,
                        last_name: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className={PersonalInfo.formGroup}>
                <label htmlFor="">Phone number</label>
                <input
                  type="tel"
                  placeholder="+23470984995736"
                  defaultValue={initialData?.phone_number}
                  onChange={(e) =>
                    setnewData({
                      ...initialData,
                      phone_number: e.target.value,
                    })
                  }
                />
              </div>
              <div
                className={`${PersonalInfo.formGroup} ${PersonalInfo.editInput}`}
              >
                <label htmlFor="">Email address</label>
                <input
                  type="email"
                  placeholder="test@email.com"
                  defaultValue={initialData.email}
                  onChange={(e) =>
                    setnewData({ ...initialData, email: e.target.value })
                  }
                />
                <div className={PersonalInfo.verified}>
                  {/* <p className={PersonalInfo.message}>{isVerified ? "Verified" : "Unverified"}</p> */}
                </div>
                <Link
                  to="/personal-information/edit"
                  className={PersonalInfo.edit}
                >
                  <img src={BlackEditPen} alt="" />
                  <p>EDIT</p>
                </Link>
              </div>
              <div className={`${PersonalInfo.formSubmit} formSubmit`}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(newData);
                  }}
                >
                  Save changes
                </button>
                <Link to="">Verify email</Link>
              </div>
            </form>
          </div>
        </div>
        <div className={PersonalInfo.subpages_footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
