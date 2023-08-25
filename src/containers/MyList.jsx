import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

const MyList = () => {
  const [myList, setMyList] = useState([]);
  const [loading, setLoading] = useState(false);

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
      {loading ? (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="myListContainer">
          {myList.map((show) => (
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
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MyList;
