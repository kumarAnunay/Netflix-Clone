import { auth } from "../firebase";

export const signoutHandler = (navigate) => {
  auth
    .signOut()
    .then(() => {
      window.location.reload();
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
