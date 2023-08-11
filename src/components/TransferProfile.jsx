import NavbarSign from "./NavbarSign";
import FooterSign from "./FooterSign";
import { useNavigate } from "react-router";
import comingSoon from "../assets/images/comingSoon.png";

const TransferProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="signupLogoHeader borderBottom">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <button className="signoutBtn" onClick={() => navigate("/")}>
          Sign Out
        </button>
      </div>
      <div className="launcingImgContainer">
        <img src={comingSoon} alt="Under Construction" />
      </div>
      <FooterSign
        styleContainer="subscriptionFooter"
        styleDropdown="footerDropdown subscriptionDropdown"
      />
    </>
  );
};

export default TransferProfile;
