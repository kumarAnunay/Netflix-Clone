import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useContext } from "react";
import SearchContext from "../../components/SearchContextProvider";
import "./MyList.css";

const MyList = () => {
  const [myList, setMyList] = useState([]);
  const [loading, setLoading] = useState(false);

  const { searching } = useContext(SearchContext);

  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    fetchMyList();
  }, []);

  const fetchMyList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/ott/watchlist/like",
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            projectId: "lb0fl09ncsvt",
          },
        }
      );
      setMyList(response.data.data.shows);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching myList data from the API:", error);
      setLoading(false);
    }
  };

  return (
    <div className="myListPage">
      <Navbar />
      {searching && (
        <>
          {loading ? (
            <div className="loaderContainer">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="myListContainer">
              {myList ? (
                myList.map((show) => (
                  <MovieCard
                    key={show._id}
                    thumbnail={show.thumbnail}
                    title={show.title}
                    showId={show._id}
                    keywords={show.keywords}
                    match="67%"
                    isMyList={true}
                    onWatchlistChange={fetchMyList}
                  />
                ))
              ) : (
                <div className="noMovies">No movies added !!</div>
              )}
            </div>
          )}
        </>
      )}
      <Footer />
    </div>
  );
};

export default MyList;
