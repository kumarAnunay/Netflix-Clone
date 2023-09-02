import NavbarSign from "../NavbarSign/NavbarSign";
import FooterSign from "../FooterSign/FooterSign";
import { useNavigate } from "react-router";
import SignoutBtn from "../SignoutBtn/SignoutBtn";
import "./UnderConstruction.css";

const UnderConstruction = ({ src }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="signupLogoHeader borderBottom">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <SignoutBtn />
      </div>
      <div className="launcingImgContainer">
        <img src={src} alt="Under Construction" />
      </div>
      <FooterSign
        styleContainer="subscriptionFooter"
        styleDropdown="footerDropdown subscriptionDropdown"
      />
    </>
  );
};

export default UnderConstruction;
