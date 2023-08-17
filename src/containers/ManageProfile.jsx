import NavbarSign from "../components/NavbarSign";
import FooterSign from "../components/FooterSign";
import { useNavigate } from "react-router";
import SignoutBtn from "../components/SignoutBtn";
import { useState } from "react";

const ManageProfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="signupLogoHeader borderBottom">
        <NavbarSign className="signupLogo" onClick={() => navigate("/home")} />
        <SignoutBtn />
      </div>
      <div className="manageProfilePage">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Update Profile</button>
        </form>
      </div>
      <FooterSign
        styleContainer="subscriptionFooter"
        styleDropdown="footerDropdown subscriptionDropdown"
      />
    </>
  );
};

export default ManageProfile;
