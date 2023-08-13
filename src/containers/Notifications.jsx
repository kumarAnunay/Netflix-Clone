import NavbarSign from "../components/NavbarSign";
import FooterSign from "../components/FooterSign";
import launchingImage from "../assets/images/underConstruction.jpg";
import { useNavigate } from "react-router";
import SignoutBtn from "../components/SignoutBtn";

const Notifications = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="signupLogoHeader borderBottom">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <SignoutBtn />
      </div>
      <div className="launcingImgContainer">
        <img src={launchingImage} alt="Under Construction" />
      </div>
      <FooterSign
        styleContainer="subscriptionFooter"
        styleDropdown="footerDropdown subscriptionDropdown"
      />
    </div>
  );
};

export default Notifications;
