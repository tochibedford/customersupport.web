import Analytics from "./Components/Analytics.jsx";
import Changes from "./Components/Changes.jsx";
import CiCdTools from "./Components/CiCdTools.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import DataCollected from "./Components/DataCollected.jsx";
import DataProtectionRights from "./Components/DataProtectionRights.jsx";
import Definitions from "./Components/Definitions.jsx";
import DisclosureOfData from "./Components/DisclosureOfData.jsx";
import InformationCollectionUse from "./Components/InformationCollectionUse.jsx";
import Introduction from "./Components/Introduction.jsx";
import LawfulBasis from "./Components/LawfulBasis.jsx";
import LinksToOtherSites from "./Components/LinksToOtherSites.jsx";
import RetentionOfData from "./Components/RetentionOfData.jsx";
import SecurityOfData from "./Components/SecurityOfData.jsx";
import ServiceProviders from "./Components/ServiceProviders.jsx";
import TransferOfData from "./Components/TransferOfData.jsx";
import UseOfData from "./Components/UseOfData.jsx";
import YourRights from "./Components/YourRights.jsx";
import Payments from "./Components/Payments.jsx";
import NavBar from "../../components/navBar/index.jsx";
import Footer from "../../components/footer/index.jsx";

import style from  "./Style/privacyPolicy.module.scss";

function PrivacyPolicy() {
  return (
    <div>
      <NavBar />
    <div className={style.container}>
      <div className={style.heading}>
        <h1>PRIVACY POLICY</h1>
        <p>Effective date: 22-11-16</p>
      </div>
      <div>
        <Introduction />
        <Definitions />
        <InformationCollectionUse />
        <DataCollected />
        <UseOfData />
        <RetentionOfData />
        <TransferOfData />
        <DisclosureOfData />
        <SecurityOfData />
        <YourRights />
        <LawfulBasis />
        <DataProtectionRights />
        <ServiceProviders />
        <Analytics />
        <CiCdTools />
        <Payments />
        <LinksToOtherSites />
        <Changes />
        <ContactUs />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
