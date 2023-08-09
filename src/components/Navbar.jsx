import netfilxLogo from "../assets/images/headerLogo.png";

const Navbar = () => {
  return (
    <nav className="navigationBar">
      <div id="leftNav">
        <img id="navLogo" src={netfilxLogo} alt="Netflix" />
        <ul id="navList">
          <li className="listItem">My List</li>
          <li className="listItem">Movies</li>
          <li className="listItem">TV Shows</li>
        </ul>
      </div>
      <div id="rightNav">
        <img className="rightItems" style={{ height: "30px" }} src={a} />
        <img className="rightItems" style={{ height: "30px" }} src={b} />
        <img className="rightItems" style={{ height: "30px" }} src={c} />
      </div>
    </nav>
  );
};

export default Navbar;
