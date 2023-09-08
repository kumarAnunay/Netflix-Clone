import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import defaultImg from "../../assets/images/avatar.png";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ManageProfile.css";

const ManageProfile = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [updatedImage, setUpdatedImage] = useState(null);
  const [profileCheck, setProfileCheck] = useState(true);

  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    const storedUpdatedImage = localStorage.getItem("updatedImage");
    console.log("token", storedToken);

    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }

    if (storedUpdatedImage) {
      setUpdatedImage(storedUpdatedImage);
    }
    if (storedUpdatedImage === "undefined") {
      setUpdatedImage(defaultImg);
    }
  }, [updatedImage]);

  const profileImageHandler = (event) => {
    const selectedImage = event.target.files[0];
    setProfileImage(selectedImage);
  };

  const uploadProfileImage = async () => {
    if (!profileImage) {
      return;
    }

    const formData = new FormData();
    formData.append("profileImage", profileImage);

    try {
      const response = await axios.patch(
        "https://academics.newtonschool.co/api/v1/user/updateProfileImage",
        formData,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            projectId: "lb0fl09ncsvt",
          },
        }
      );

      // console.log("token", storedToken);

      const updatedImageUrl = response.data.data.user.profileImage;
      // console.log(updatedImageUrl);
      setUpdatedImage(updatedImageUrl);
      localStorage.setItem("updatedImage", updatedImageUrl);

      toast.success("Image updated successfully.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to update image.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const profileCheckboxHandler = () => {
    setProfileCheck(!profileCheck);
  };

  return (
    <>
      <div className="manageProfilePage">
        <ToastContainer />
        <h1 className="manageProfileHeading">Edit Profile</h1>
        <div className="imageAndDetailsContainer">
          <div className="profileImageContainer">
            <div className="editProfileImage">
              <input
                type="file"
                accept="image/*"
                id="profileImageInput"
                style={{ display: "none" }}
                onChange={profileImageHandler}
              />
              <label htmlFor="profileImageInput">
                <span className="editIcon">
                  <ModeEditOutlineOutlinedIcon className="profileEditIcon" />
                </span>
              </label>
            </div>
            <img
              src={
                profileImage ? URL.createObjectURL(profileImage) : updatedImage
              }
              alt="Profile"
              className="profileImage"
            />
          </div>
          <div className="profilerightSide">
            <div className="profileDetailsContainer">
              <p className="managePofileUserName">{userInfo?.userName}</p>
              <p className="profileLanguage">Language:</p>
              <select className="profileDropdown">
                <option>English</option>
                <option>हिंदी</option>
              </select>
              <p className="accountGameText">Game Handle:</p>
              <p className="accountText">
                Your handle is a unique name that'll be used for playing with
                other Netflix members across all Netflix Games.
                <span>Learn more</span>
              </p>
              <h1 className="accountCreateGame">Create Game Handle</h1>
            </div>
            <div className="profileSettings">
              <p className="profileSettingsHeader">Maturity settings:</p>
              <p className="profileSettingsSubHeader">All Maturity Ratings</p>
              <p className="profileSettingsText">
                Show titles of all maturity ratings for this profile
              </p>
              <p className="profileEdit">Edit</p>
            </div>
            <div className="profileAutoplay">
              <p className="autolayText">Autoplay controls</p>
              <div className="profileAutoplayFirst autoplayText">
                <input
                  type="checkbox"
                  className="profileCheckbox"
                  checked={profileCheck}
                  onChange={profileCheckboxHandler}
                />
                Autoplay next episode in a series on all devices.
              </div>
              <div className="profileAutoplaySecond autoplayText">
                <input
                  type="checkbox"
                  className="profileCheckbox"
                  checked={profileCheck}
                  onChange={profileCheckboxHandler}
                />
                Autoplay previews while browsing on all devices.
              </div>
            </div>
          </div>
        </div>
        <div className="profileBtnContainer">
          <button
            className="profileSaveBtn profileBtn"
            onClick={uploadProfileImage}
          >
            Save
          </button>
          <button
            className="profileCancelBtn profileBtn"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ManageProfile;
