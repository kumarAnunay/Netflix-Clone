import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://academics.newtonschool.co/api/v1/ott/show",
          {
            headers: {
              projectId: "lb0fl09ncsvt",
            },
            params: {
              filter: JSON.stringify({ type: "tv show" }),
            },
          }
        );
        setTvShows((prevTvShows) => [...prevTvShows, ...response.data.data]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="tvShowsPage">
      <Navbar />
      {loading ? (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="moviesContainer">
          {tvShows.map((tvShow) => (
            <div className="movieCardContainer" key={tvShow.id}>
              <img
                src={tvShow.thumbnail}
                alt="Movie_Image"
                className="movieImage"
              />
              <div className="movieCardContent">
                <div className="movieCardContentBtn">
                  <button className="playContentBtn">
                    <PlayArrowIcon className="playtBtnIcon" />
                    Play
                  </button>
                  <button className="addContentBtn">
                    <AddIcon className="addBtnIcon" />
                  </button>
                </div>
                <h1 className="movieCardContentTitle">{tvShow.title}</h1>
                <h2 className="movieCardContentDescription">
                  {tvShow.description}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default TvShows;
