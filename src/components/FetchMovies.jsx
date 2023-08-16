import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

const FetchMovies = ({ type }) => {
  const [movies, setMovies] = useState([]);
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
              filter: JSON.stringify({ type }),
            },
          }
        );
        setMovies(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div className="webseriesPage">
      <Navbar />
      {loading ? (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="moviesContainer">
          {movies.map((movie) => (
            <MovieCard
              thumbnail={movie.thumbnail}
              title={movie.title}
              description={movie.description}
              showId={movie._id}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default FetchMovies;
