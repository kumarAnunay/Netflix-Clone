import NavbarSign from "../components/NavbarSign";
import FooterSign from "./FooterSign";
import launchingImage from "../assets/images/underConstruction.jpg";
import { useNavigate } from "react-router";

const Notifications = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="signupLogoHeader borderBottom">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <button className="signoutBtn" onClick={() => navigate("/")}>
          Sign Out
        </button>
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
