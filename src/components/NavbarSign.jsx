import { useNavigate } from "react-router";
import headerLogo from "../assets/images/headerLogo.png";

const NavbarSign = () => {
  const navigate = useNavigate();
  return (
    <img
      src={headerLogo}
      className="headerLogo logo"
      alt="NETFLIX"
      onClick={() => navigate("/")}
    />
  );
};

export default NavbarSign;
