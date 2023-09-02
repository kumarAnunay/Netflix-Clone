import { useNavigate } from "react-router";
import { signoutHandler } from "../../utils/signoutHandler";
import "./SignoutBtn.css";

const SignoutBtn = () => {
  const navigate = useNavigate();

  return (
    <button className="signoutBtn" onClick={() => signoutHandler(navigate)}>
      Sign Out
    </button>
  );
};

export default SignoutBtn;
