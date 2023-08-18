import React, { useState, useEffect } from "react";
import { movieTrailerLsit } from "../utils/movieTrailerList";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const MovieTrailer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeMovieRandomly = () => {
      const randomIndex = Math.floor(Math.random() * movieTrailerLsit.length);
      setCurrentIndex(randomIndex);
      setTimeout(changeMovieRandomly, 120000);
    };

    changeMovieRandomly();
    return () => {
      clearTimeout(changeMovieRandomly);
    };
  }, [currentIndex]);

  return (
    <div className="movieTrailer">
      <div className="movieTrailerContainer">
        <div className="movieTrailerContent">
          <h1 className="movieTrailerTitle">
            {movieTrailerLsit[currentIndex]?.title}
          </h1>
          <h4 className="movieTrailerDescription">
            {movieTrailerLsit[currentIndex]?.description}
          </h4>
          <div className="movieTrailerBtnContainer">
            <button className="movieTrailerPlayBtn">
              <PlayArrowIcon className="playIcon" />
              Play Now
            </button>
            <button className="movieTrailerInformationBtn">
              <InfoOutlinedIcon className="informationIcon" /> More Info
            </button>
          </div>
        </div>
        <img
          src={movieTrailerLsit[currentIndex]?.src}
          alt="Movie"
          className="movieTrailerImage"
        />
      </div>
    </div>
  );
};

export default MovieTrailer;
