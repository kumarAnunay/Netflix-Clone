import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MovieCard from "../MovieCard/MovieCard";
import { useContext } from "react";
import SearchContext from "../SearchContextProvider";
import "./FetchMovies.css";

const FetchMovies = ({ type, match }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const { searching } = useContext(SearchContext);

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://academics.newtonschool.co/api/v1/ott/show?limit=100",
          {
            headers: {
              projectId: "lb0fl09ncsvt",
            },
            params: {
              filter: JSON.stringify({ type }),
            },
          }
        );
        setMovies(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
        setErrorMsg(error);
      }
    };
    fetchMovies();
  }, []);

  if (errorMsg) {
    return (
      <>
        <Navbar />
        <div className="errorComponent">API error: {errorMsg.message}</div>
        <Footer />
      </>
    );
  }

  return (
    <div className="webseriesPage">
      <Navbar />

      {searching && (
        <>
          {loading ? (
            <div className="loaderContainer">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="moviesContainer">
              {movies.map((movie, index) => (
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
        </>
      )}
      <Footer />
    </div>
  );
};

export default FetchMovies;
