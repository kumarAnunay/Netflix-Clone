import NavbarSign from "../components/NavbarSign";
import FooterSign from "../components/FooterSign";
import { useNavigate } from "react-router";
import comingSoon from "../assets/images/comingSoon.png";
import SignoutBtn from "../components/SignoutBtn";

const TransferProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="signupLogoHeader borderBottom">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <SignoutBtn />
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
