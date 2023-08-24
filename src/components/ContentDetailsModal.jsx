import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import axios from "axios";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import RemoveIcon from "@mui/icons-material/Remove";
import Tooltip from "@mui/material/Tooltip";
import MovieCard from "./MovieCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  minHeight: "100vh",
  bgcolor: "#181818",
  boxShadow: 24,
  mt: 45,
};

const ContentDetailsModal = ({
  isOpen,
  onClose,
  isInMyList,
  showId,
  match,
}) => {
  const [contentDetails, setContentDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [likeColor, setLikeColor] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchMovieContent = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/ott/show/${showId}`,

        {
          headers: {
            projectId: "lb0fl09ncsvt",
          },
        }
      );

      setContentDetails(response.data.data);
      console.log("content: ", contentDetails);
      setLoading(false);
    } catch (error) {
      console.error("Error in Movie Content API:", error);
      setLoading(false);
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

  return (
    <div>
      {loading ? (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      ) : (
        <Modal
          open={isOpen}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ overflowY: "scroll" }}
        >
          <Box sx={style} className="modal">
            <video
              src={contentDetails.video_url}
              type="video/mp4"
              autoPlay
              loop
              className="contentVideo"
            />
            <div className="contentDetailsContainer">
              <h3 className="contentMovietitle">{contentDetails.title}</h3>
              <div className="ContentDetailsBtnContainer">
                <div className="movieCardContentBtn contentCardBttn">
                  <button className="movieTrailerPlayBtn">
                    <PlayArrowIcon className="playIcon" />
                    Play Now
                  </button>
                  <Tooltip
                    title={isInMyList ? "Remove from MyList" : "Add to MyList"}
                    placement="top"
                  >
                    <button className="addContentBtn">
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
                <Tooltip title="Volume" placement="top">
                  <VolumeUpIcon className="volumeIcon" />
                </Tooltip>
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
                    {movies.slice(50, 56).map((movie, index) => (
                      <MovieCard
                        thumbnail={movie.thumbnail}
                        title={movie.title}
                        showId={movie._id}
                        keywords={movie.keywords}
                        match={match}
                        key={index}
                        videoUrl={movie.video_url}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default ContentDetailsModal;
