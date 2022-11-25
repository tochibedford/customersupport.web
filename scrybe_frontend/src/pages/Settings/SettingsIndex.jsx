// import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/Settings";
import PersonalInformation from "./SettingsPageSubPages/PersonalInformation/PersonalInformationSettings";
import AccountSetting from "./SettingsPageSubPages/AccountSettings/AccountSettings";
import Notification from "./SettingsPageSubPages/Notifications/NotificationSettings";
import { AuthContextProvider } from "./AuthContext";

function SettingsIndex() {
  return (
    <AuthContextProvider>
      <div className="Index">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route
            path="/personal-information"
            element={<PersonalInformation />}
          />
          <Route path="/account-security" element={<AccountSetting />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default SettingsIndex;
