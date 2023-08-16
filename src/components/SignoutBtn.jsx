import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../AuthContext";
import { signoutHandler } from "../utils/signoutHandler";

const SignoutBtn = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  return (
    <button
      className="signoutBtn"
      onClick={() => signoutHandler(dispatch, navigate)}
    >
      Sign Out
    </button>
  );
};

export default SignoutBtn;
