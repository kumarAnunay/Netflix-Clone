import { auth } from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const LoginCheck = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
      console.log(user);
    });
  }, []);
  return <>{props.children}</>;
};

export default LoginCheck;
