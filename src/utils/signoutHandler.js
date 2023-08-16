import { auth } from "../firebase";

export const signoutHandler = (dispatch, navigate) => {
  auth
    .signOut()
    .then(() => {
      dispatch({ type: "LOGOUT" });
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
