import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [toFetch, setToFetch] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://academics.newtonschool.co/api/v1/ott/show?page=${page}&limit=10`,
          {
            headers: {
              projectId: "lb0fl09ncsvt",
            },
            params: {
              filter: JSON.stringify({ type: "movie" }),
            },
          }
        );
        setMovies((prevMovies) => [...prevMovies, ...response.data.data]);
        setPage((prevPage) => prevPage + 1);
        setLoading(false);
        setToFetch(false);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
      }
    };
    if (toFetch) {
      fetchMovies();
    }
  }, [toFetch]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.body.offsetHeight - 1000
      ) {
        setToFetch(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="moviesPage">
      <Navbar />
      {loading ? (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="moviesContainer">
          {movies.map((movie) => (
            <div className="movieCardContainer" key={movie.id}>
              <img
                src={movie.thumbnail}
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
                <h1 className="movieCardContentTitle">{movie.title}</h1>
                <h2 className="movieCardContentDescription">
                  {movie.description}
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

export default Movies;
