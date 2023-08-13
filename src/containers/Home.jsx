import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieTrailer from "../components/MovieTrailer";
import axios from "axios";

const Home = () => {
  const [moviesType, setMoviesType] = useState({
    webSeries: [],
    videoSong: [],
    tvShow: [],
    shortFilm: [],
    movie: [],
    documentary: [],
    trailer: [],
  });
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://academics.newtonschool.co/api/v1/ott/show`,
  //         {
  //           headers: {
  //             projectId: "lb0fl09ncsvt",
  //           },
  //         }
  //       );
  //       setMoviesType({
  //         ...moviesType,
  //         webSeries
  //       });
  //     } catch (error) {
  //       console.error("Error fetching data from the API:", error);
  //       // setLoading(false);
  //     }
  //   };
  //   fetchMovies();
  // }, []);
  return (
    <div className="homePage">
      <Navbar />
      <MovieTrailer />
      <Footer />
    </div>
  );
};

export default Home;
//projectId: lb0fl09ncsvt
