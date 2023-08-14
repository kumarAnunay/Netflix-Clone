import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

const Webseries = () => {
  const [webseries, setWebseries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWebseries = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://academics.newtonschool.co/api/v1/ott/show",
          {
            headers: {
              projectId: "lb0fl09ncsvt",
            },
            params: {
              filter: JSON.stringify({ type: "web series" }),
            },
          }
        );
        setWebseries(response.data.data); // Update directly with the array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
        setLoading(false);
      }
    };
    fetchWebseries();
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
          {webseries.map((web) => (
            <MovieCard
              key={web.id}
              thumbmail={web.thumbnail}
              title={web.title}
              description={web.description}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Webseries;
