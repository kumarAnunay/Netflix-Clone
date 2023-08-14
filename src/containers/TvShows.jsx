import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTvShows = async () => {
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
        setTvShows(response.data.data); // Update directly with the array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
      }
    };
    fetchTvShows();
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
            <MovieCard
              key={tvShow.id}
              thumbmail={tvShow.thumbnail}
              title={tvShow.title}
              description={tvShow.description}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default TvShows;
