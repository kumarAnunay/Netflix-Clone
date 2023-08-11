import headerLogo from "../assets/images/headerLogo.png";

const NavbarSign = ({ onClick }) => {
  return (
    <img
      src={headerLogo}
      className="headerLogo logo"
      alt="NETFLIX"
      onClick={onClick}
    />
  );
};

export default NavbarSign;
