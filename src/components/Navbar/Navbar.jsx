import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import netfilxLogo from "../../assets/images/headerLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MovieCard from "../MovieCard/MovieCard";
import SearchContext from "../SearchContextProvider";
import { useContext } from "react";
import NavbarMenu from "./NavbarMenu";
import MenuDropdown from "../MenuDropdown";
import Tooltip from "@mui/material/Tooltip";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navShow, setNavShow] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchInputVisivle, setSearchInputVisible] = useState(false);
  const seachIconRef = useRef(null);
  const [activeButton, setActiveButton] = useState("");
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
      // console.log("setting", searchMoviesRef.current);
      // console.log("searchMovies", searchMoviesRef.current);
      const searchResult = searchMoviesRef.current.filter((movie) =>
        movie.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchedMovies(searchResult);
      // console.log(searchResult);
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
          <NavbarMenu />
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
          <Tooltip title="No Notifications">
            <NotificationsNoneIcon
              className="icons"
              onClick={() => navigate("/notifications")}
            />
          </Tooltip>
          <MenuDropdown />
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

export default Navbar;
