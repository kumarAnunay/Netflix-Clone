import { auth } from "../firebase";

export const signoutHandler = (dispatch, navigate) => {
  if (window.confirm("Do you want to Signout?")) {
    auth
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("authToken");
        localStorage.removeItem("userInfo");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
