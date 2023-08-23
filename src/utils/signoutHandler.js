import { auth } from "../firebase";

export const signoutHandler = (navigate) => {
  if (window.confirm("Do you want to Signout?")) {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userInfo");
        localStorage.removeItem("updateImage");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
