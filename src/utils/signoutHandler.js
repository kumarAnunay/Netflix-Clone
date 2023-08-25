export const signoutHandler = (navigate) => {
  if (window.confirm("Leaving so Soon?")) {
    // auth
    //   .signOut()
    //   .then(() => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("updatedImage");
    navigate("/");
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }
};
