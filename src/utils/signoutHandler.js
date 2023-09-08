export const signoutHandler = (navigate) => {
  if (window.confirm("Leaving So Soon?")) {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("updatedImage");
    navigate("/");
  }
};
