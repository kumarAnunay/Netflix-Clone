import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import netfilxLogo from "../assets/images/headerLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import accoutImg from "../assets/images/avatar.png";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { signoutHandler } from "../utils/signoutHandler";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MovieCard from "./MovieCard";
import SearchContext from "./SearchContextProvider";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navShow, setNavShow] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchInputVisivle, setSearchInputVisible] = useState(false);
  const seachIconRef = useRef(null);
  const [userInfo, setUserInfo] = useState(null);
  const [activeButton, setActiveButton] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");
  const searchContainerRef = useRef(null);
  const [searchedMovies, setSearchedMovies] = useState([]);

  const { setSearching } = useContext(SearchContext);

  const searchMoviesRef = useRef([]);

  const fetchSeachMovies = async () => {
    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/ott/show",
        {
          headers: {
            projectId: "lb0fl09ncsvt",
          },
        }
      );
      searchMoviesRef.current = response.data.data;
      console.log("setting", searchMoviesRef.current);
      console.log("searchMovies", searchMoviesRef.current);
      const searchResult = searchMoviesRef.current.filter((movie) =>
        movie.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchedMovies(searchResult);
      console.log(searchResult);
      // console.log("response", response.data.data);
    } catch (error) {
      console.error("Error fetching data from search:", error);
    }
  };

  useEffect(() => {
    const currentPath = location.pathname;

    switch (currentPath) {
      case "/home":
        setActiveButton("home");
        break;
      case "/movies":
        setActiveButton("movies");
        break;
      case "/my-list":
        setActiveButton("my-list");
        break;
      case "/tv-shows":
        setActiveButton("tv-shows");
        break;
      case "/web-series":
        setActiveButton("web-series");
        break;
      default:
        setActiveButton("");
        break;
    }
  }, [location]);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    const storedUpdatedImage = localStorage.getItem("updatedImage");
    // console.log("image", storedUpdatedImage);

    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
    if (storedUpdatedImage) {
      setUpdatedImage(storedUpdatedImage);
    } else {
      setUpdatedImage(accoutImg);
    }
  }, [updatedImage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavShow("navShow");
      } else {
        setNavShow("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const searchInputVisibleHandler = () => {
    setSearchInputVisible(!searchInputVisivle);
    seachIconRef.current.style.display = "none";
  };

  const inputValueHandler = (event) => {
    setSearchInput(event.target.value);
    console.log("search value:", event.target.value);
    if (event.target.value) {
      fetchSeachMovies();
      searchContainerRef.current.style.display = "block";
      setSearching(false);
    } else {
      searchContainerRef.current.style.display = "none";
      searchMoviesRef.current = [];
      setSearching(true);
    }
  };

  return (
    <div className="navigationBarContainer">
      <nav className={`navigationBar ${navShow}`}>
        <div className="leftNav">
          <img
            id="navLogo"
            src={netfilxLogo}
            alt="Netflix"
            className="navbarLogo"
            onClick={() => navigate("/home")}
          />
          <ul className="navList">
            <li
              className={`listItem ${
                activeButton === "home" ? "activeListItem" : ""
              }`}
              onClick={() => navigate("/home")}
            >
              Home
            </li>
            <li
              className={`listItem ${
                activeButton === "my-list" ? "activeListItem" : ""
              }`}
              onClick={() => navigate("/my-list")}
            >
              My List
            </li>
            <li
              className={`listItem ${
                activeButton === "movies" ? "activeListItem" : ""
              }`}
              onClick={() => navigate("/movies")}
            >
              Movies
            </li>
            <li
              className={`listItem ${
                activeButton === "tv-shows" ? "activeListItem" : ""
              }`}
              onClick={() => navigate("/tv-shows")}
            >
              TV Shows
            </li>
            <li
              className={`listItem ${
                activeButton === "web-series" ? "activeListItem" : ""
              }`}
              onClick={() => navigate("/web-series")}
            >
              Web Series
            </li>
          </ul>
          <Dropdown>
            <TriggerButton className="navbarDropdown browseMenu">
              <span className="smallDevicesNavbar">
                Browse <ArrowDropDownIcon className="downArrowIcon" />
              </span>
            </TriggerButton>
            <Menu
              slots={{ listbox: StyledListbox }}
              className="menuList browseList"
            >
              <StyledMenuItem className="accountItems">
                <p
                  className={`listItem ${
                    activeButton === "home" ? "activeListItem" : ""
                  }`}
                  onClick={() => navigate("/home")}
                >
                  Home
                </p>
              </StyledMenuItem>
              <StyledMenuItem className="accountItems">
                <p
                  className={`listItem ${
                    activeButton === "my-list" ? "activeListItem" : ""
                  }`}
                  onClick={() => navigate("/my-list")}
                >
                  My List
                </p>
              </StyledMenuItem>
              <StyledMenuItem className="accountItems">
                <p
                  className={`listItem ${
                    activeButton === "movies" ? "activeListItem" : ""
                  }`}
                  onClick={() => navigate("/movies")}
                >
                  Movies
                </p>
              </StyledMenuItem>
              <StyledMenuItem className="accountItems">
                <p
                  className={`listItem ${
                    activeButton === "tv-shows" ? "activeListItem" : ""
                  }`}
                  onClick={() => navigate("/tv-shows")}
                >
                  TV Shows
                </p>
              </StyledMenuItem>
              <StyledMenuItem className="accountItems">
                <p
                  className={`listItem ${
                    activeButton === "web-series" ? "activeListItem" : ""
                  }`}
                  onClick={() => navigate("/web-series")}
                >
                  Web Series
                </p>
              </StyledMenuItem>
            </Menu>
          </Dropdown>
        </div>
        <div className="rightNav">
          {searchInputVisivle && (
            <div className="searchContainer">
              <input
                type="text"
                id="search"
                value={searchInput}
                className="searchInput"
                onChange={inputValueHandler}
                placeholder="Search"
              />
              <CloseIcon
                className="searchIcon closeSearchIcon"
                onClick={() => {
                  setSearchInputVisible(false);
                  seachIconRef.current.style.display = "block";
                  searchContainerRef.current.style.display = "none";
                  setSearchInput("");
                  setSearching(true);
                }}
              />
            </div>
          )}
          <SearchIcon
            className="icons"
            onClick={searchInputVisibleHandler}
            ref={seachIconRef}
          />
          <NotificationsNoneIcon
            className="icons"
            onClick={() => navigate("/notifications")}
          />
          <Dropdown>
            <TriggerButton className="navbarDropdown">
              <img src={accoutImg} alt="Account" className="accountImg" />
            </TriggerButton>
            <Menu slots={{ listbox: StyledListbox }} className="menuList">
              <StyledMenuItem className="accountItems">
                <div className="icon_text">
                  <img
                    src={updatedImage}
                    alt="Account"
                    className="useAccountImg"
                  />
                  <p className="iconText">{userInfo?.userName}</p>
                </div>
              </StyledMenuItem>
              <StyledMenuItem className="accountItems">
                <div className="icon_text">
                  <ModeOutlinedIcon className="accountIcons" />
                  <p
                    className="iconText"
                    onClick={() => navigate("/manage-profile")}
                  >
                    Manage Profile
                  </p>
                </div>
              </StyledMenuItem>
              <StyledMenuItem className="accountItems">
                <div className="icon_text">
                  <AdminPanelSettingsOutlinedIcon className="accountIcons" />
                  <p
                    className="iconText"
                    onClick={() => navigate("/transfer-profile")}
                  >
                    Transfer Profile
                  </p>
                </div>
              </StyledMenuItem>
              <StyledMenuItem className="accountItems">
                <div className="icon_text">
                  <PermIdentityOutlinedIcon className="accountIcons" />
                  <p className="iconText" onClick={() => navigate("/account")}>
                    Account
                  </p>
                </div>
              </StyledMenuItem>
              <StyledMenuItem className="accountItems">
                <div className="icon_text">
                  <HelpOutlineOutlinedIcon className="accountIcons" />
                  <p
                    className="iconText"
                    onClick={() => navigate("/help-centre")}
                  >
                    Help Center
                  </p>
                </div>
              </StyledMenuItem>
              <StyledMenuItem className="accountItems">
                <div className="icon_text">
                  <SubscriptionsOutlinedIcon className="accountIcons" />
                  <p
                    className="iconText"
                    onClick={() => navigate("/subscription-step1")}
                  >
                    My Subscription
                  </p>
                </div>
              </StyledMenuItem>
              <StyledMenuItem className="accountItems">
                <div className="lastIcon">
                  <p
                    className="iconText"
                    onClick={() => signoutHandler(navigate)}
                  >
                    Sign out of Netflix
                  </p>
                </div>
              </StyledMenuItem>
            </Menu>
          </Dropdown>
        </div>
      </nav>
      <div className="searchSuggestionsContainer" ref={searchContainerRef}>
        <div className="moviesContainer">
          {searchedMovies.map((movie, index) => (
            <MovieCard
              thumbnail={movie.thumbnail}
              title={movie.title}
              showId={movie._id}
              keywords={movie.keywords}
              match="77%"
              key={index}
              videoUrl={movie.video_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-width: 200px;
  overflow: auto;
  outline: 0px;
  z-index: 1;
  `
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }
  `
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 8px 14px;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
  `
);

export default Navbar;
