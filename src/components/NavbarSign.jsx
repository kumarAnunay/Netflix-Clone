import { useNavigate } from "react-router";
import headerLogo from "../assets/images/headerLogo.png";

const NavbarSign = () => {
  const navigate = useNavigate();
  return (
    <div className="logo">
      <img
        src={headerLogo}
        className="headerLogo"
        alt="NETFLIX"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default NavbarSign;
