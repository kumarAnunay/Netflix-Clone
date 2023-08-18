import { useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveIcon from "@mui/icons-material/Remove";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";

const storedToken = localStorage.getItem("authToken");

const MovieCard = ({
  thumbnail,
  title,
  keywords,
  match,
  showId,
  isMyList = false,
  onWatchlistChange,
  className = "",
}) => {
  const [isInMyList, setIsInMyList] = useState(isMyList);
  const [likeColor, setLikeColor] = useState(false);

  const toggleWatchlist = async () => {
    try {
      const response = await axios.patch(
        "https://academics.newtonschool.co/api/v1/social_media/watchlist",
        { showId: showId },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            projectId: "lb0fl09ncsvt",
          },
        }
      );

      setIsInMyList((prevState) => !prevState);
      onWatchlistChange();
    } catch (error) {
      console.error("Error in Add/Remove API:", error);
    }
  };

  return (
    <div className={`movieCardContainer ${className}`}>
      <img src={thumbnail} alt="Movie_Image" className="movieImage" />
      <div className="movieCardContent">
        <h1 className="movieCardContentTitle">{title}</h1>
        <div className="movieCardBtnContainer">
          <div className="movieCardContentBtn">
            <button className="playContentBtn">
              <PlayArrowIcon className="playBtnIcon" />
            </button>
            <Tooltip
              title={isInMyList ? "Remove from MyList" : "Add to MyList"}
              placement="top"
            >
              <button className="addContentBtn" onClick={toggleWatchlist}>
                {isInMyList ? (
                  <RemoveIcon className="addBtnIcon" />
                ) : (
                  <AddIcon className="addBtnIcon" />
                )}
              </button>
            </Tooltip>

            <button
              className={`likeBtn ${likeColor && "likeColor"}`}
              onClick={() => setLikeColor(!likeColor)}
            >
              <ThumbUpIcon
                className={`likeBtnIcon ${likeColor && "likeColor"}`}
              />
            </button>
          </div>
          <Tooltip title="More Info" placement="top">
            <button className="moreInfoBtn">
              <ExpandMoreIcon className="moreInfoIcon" />
            </button>
          </Tooltip>
        </div>
        <p className="matchContent">
          {match}
          <span className="matchContentAge">U/A 16+</span>
        </p>
        <div className="movieKeywords">
          {keywords.map((keyword) => (
            <span key={keyword} className="movieKeyword">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
