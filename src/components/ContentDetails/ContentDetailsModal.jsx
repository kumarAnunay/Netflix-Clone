import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import axios from "axios";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import RemoveIcon from "@mui/icons-material/Remove";
import Tooltip from "@mui/material/Tooltip";
import MovieCard from "../MovieCard/MovieCard";
import { useNavigate } from "react-router";
import CloseIcon from "@mui/icons-material/Close";
import "../MovieCard/MovieCard.css";
import "./ContentDetails.css";

const style = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%)",
  width: "65%",
  bgcolor: "#181818",
  boxShadow: 24,
  border: "2px solid #000",
};

const modalContentStyle = {
  display: "flex",
  flexDirection: "column",
};

const ContentDetailsModal = ({
  isOpen,
  onClose,
  isInMyList,
  showId,
  match,
  onClick,
}) => {
  const [contentDetails, setContentDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [likeColor, setLikeColor] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isMute, setIsMute] = useState(false);
  const navigate = useNavigate();

  const fetchMovieContent = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/ott/show/${showId}`,

        {
          headers: {
            projectId: "lb0fl09ncsvt",
          },
        }
      );

      setContentDetails(response.data.data);
      // console.log("content: ", contentDetails);
    } catch (error) {
      console.error("Error in Movie Content API:", error);
    }
  };

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/ott/show",
        {
          headers: {
            projectId: "lb0fl09ncsvt",
          },
        }
      );
      setMovies(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching more like this:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchMovieContent();
      fetchMovies();
    }
  }, [isOpen, showId]);

  const volumeOnHandler = () => {
    setIsMute(true);
  };

  const volumeOffHandler = () => {
    setIsMute(false);
  };

  const playMovieHandler = () => {
    navigate("/playMovie", {
      state: { videoUrl: contentDetails.video_url },
    });
  };

  return (
    <div className="modalContainer">
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflowY: "scroll", margin: "20px 0" }}
      >
        <Box sx={style} className="modal">
          <div style={modalContentStyle}>
            <CloseIcon className="closeModalIcon" onClick={onClose} />
            <video
              src={contentDetails.video_url}
              type="video/mp4"
              autoPlay
              loop
              muted={isMute}
              className="contentVideo"
            />
            <div className="contentDetailsContainer">
              <h3 className="contentMovietitle">{contentDetails.title}</h3>
              <div className="ContentDetailsBtnContainer">
                <div className="movieCardContentBtn contentCardBttn">
                  <button
                    className="movieTrailerPlayBtn"
                    onClick={playMovieHandler}
                  >
                    <PlayArrowIcon className="playIcon" />
                    Play Now
                  </button>
                  <Tooltip
                    title={isInMyList ? "Remove from MyList" : "Add to MyList"}
                    placement="top"
                  >
                    <button className="addContentBtn" onClick={onClick}>
                      {isInMyList ? (
                        <RemoveIcon className="addBtnIcon contentBtnIcon" />
                      ) : (
                        <AddIcon className="addBtnIcon contentBtnIcon" />
                      )}
                    </button>
                  </Tooltip>

                  <button
                    className={`likeBtn ${likeColor && "likeColor"}`}
                    onClick={() => setLikeColor(!likeColor)}
                  >
                    <ThumbUpIcon
                      className={`likeBtnIcon contentBtnIcon ${
                        likeColor && "likeColor"
                      }`}
                    />
                  </button>
                </div>
                {isMute ? (
                  <Tooltip title="Unmute" placement="top">
                    <VolumeOffIcon
                      className="volumeIcon volumeOff"
                      onClick={volumeOffHandler}
                    />
                  </Tooltip>
                ) : (
                  <Tooltip title="mute" placement="top">
                    <VolumeUpIcon
                      className="volumeIcon"
                      onClick={volumeOnHandler}
                    />
                  </Tooltip>
                )}
              </div>
              <div className="contentDetailsContent">
                <div className="matchContent contentMatch">
                  {match}
                  <span className="matchContentAge contentMatchAge">
                    U/A 16+
                  </span>
                </div>
                <div className="movieContentDetails">
                  <div className="contentMovieDescription">
                    {contentDetails.description}
                  </div>
                  <div className="keywordsCastDirector">
                    <div>Genres : {contentDetails.keywords} </div>
                    <div>
                      Cast : <span>{contentDetails.cast}</span>
                    </div>
                    <div>Director : {contentDetails.director} </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="moreLikethisContainer">
              <p className="moreLikethisTitle">More Like This</p>
              <br />
              <div className="moreMoviesContainer">
                {loading ? (
                  <div className="loaderContainer">
                    <div className="loader"></div>
                  </div>
                ) : (
                  <div className="moviesContainer moreLikethisMovies">
                    {movies.slice(0, 9).map((movie, index) => (
                      <MovieCard
                        thumbnail={movie.thumbnail}
                        title={movie.title}
                        showId={movie._id}
                        keywords={movie.keywords}
                        match={match}
                        key={index}
                        videoUrl={movie.video_url}
                        className="categoriesCard"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ContentDetailsModal;
