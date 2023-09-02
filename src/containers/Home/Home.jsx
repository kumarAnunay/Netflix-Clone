import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MovieTrailer from "../../components/MovieTrailer/MovieTrailer";
import axios from "axios";
import MovieCard from "../../components/MovieCard/MovieCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useContext } from "react";
import SearchContext from "../../components/SearchContextProvider";
import "../../components/MovieCard/MovieCard.css";
import "./Home.css";

const Home = () => {
  const [newReleases, setNewRealeases] = useState([]);
  const [trendingContent, setTrendingContent] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanticMovies, setRomanticMovies] = useState([]);
  const [onlyonNetflixMovies, setOnlyonNetflixMovies] = useState([]);
  const [popularOnNetflix, setPopularOnNetflix] = useState([]);

  const [newReleasesPage, setNewRealeasesPage] = useState(1);
  const [trendingContentPage, setTrendingContentPages] = useState(1);
  const [recommendedMoviesPage, setRecommendedMoviesPage] = useState(1);
  const [adventureMoviesPage, setAdventureMoviesPage] = useState(1);
  const [comedyMoviesPage, setComedyMoviesPage] = useState(1);
  const [horrorMoviesPage, setHorrorMoviesPage] = useState(1);
  const [romanticMoviesPage, setRomanticMoviesPage] = useState(1);
  const [onlyonNetflixMoviesPage, setOnlyonNetflixMoviesPage] = useState(1);
  const [popularOnNetflixPage, setPopularOnNetflixPage] = useState(1);

  const { searching } = useContext(SearchContext);

  const fetchMovies = async (filter, page) => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/ott/show`,
        {
          headers: {
            projectId: "lb0fl09ncsvt",
          },
          params: {
            filter: JSON.stringify(filter),
            page: page,
            limit: 10,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };

  useEffect(() => {
    const fetchNewReleases = async () => {
      const newReleasesData = await fetchMovies(
        { type: "web series" },
        newReleasesPage
      );
      setNewRealeases(newReleasesData);
    };
    fetchNewReleases();
  }, [newReleasesPage]);

  useEffect(() => {
    const fetchTrendingContent = async () => {
      const trendingContentData = await fetchMovies(
        { type: "tv show" },
        trendingContentPage
      );
      setTrendingContent(trendingContentData);
    };
    fetchTrendingContent();
  }, [trendingContentPage]);

  useEffect(() => {
    const fetchRecommendedContent = async () => {
      const recommendedMoviesData = await fetchMovies(
        { type: "short film" },
        recommendedMoviesPage
      );
      setRecommendedMovies(recommendedMoviesData);
    };
    fetchRecommendedContent();
  }, [recommendedMoviesPage]);

  useEffect(() => {
    const fetchAdventureMovies = async () => {
      const adventureMoviesData = await fetchMovies(
        { type: "movie" },
        adventureMoviesPage
      );
      setAdventureMovies(adventureMoviesData);
    };
    fetchAdventureMovies();
  }, [adventureMoviesPage]);

  useEffect(() => {
    const fetchComedyMovies = async () => {
      const comedyMoviesData = await fetchMovies(
        { type: "trailer" },
        comedyMoviesPage
      );
      setComedyMovies(comedyMoviesData);
    };
    fetchComedyMovies();
  }, [comedyMoviesPage]);

  useEffect(() => {
    const fetchHorrorMovies = async () => {
      const horrorMoviesData = await fetchMovies(
        { type: "documentary" },
        horrorMoviesPage
      );
      setHorrorMovies(horrorMoviesData);
    };
    fetchHorrorMovies();
  }, [horrorMoviesPage]);

  useEffect(() => {
    const fetchRomanticMovies = async () => {
      const romanticMoviesData = await fetchMovies(
        { type: "video song" },
        romanticMoviesPage
      );
      setRomanticMovies(romanticMoviesData);
    };
    fetchRomanticMovies();
  }, [romanticMoviesPage]);

  useEffect(() => {
    const fetchOnlyonNetflix = async () => {
      const onlyonNetflixData = await fetchMovies(
        { type: "movie" },
        onlyonNetflixMoviesPage
      );
      setOnlyonNetflixMovies(onlyonNetflixData);
    };
    fetchOnlyonNetflix();
  }, [onlyonNetflixMoviesPage]);

  useEffect(() => {
    const fetchPopularOnNetflix = async () => {
      const popularOnNetflixData = await fetchMovies(
        { type: "trailer" },
        popularOnNetflixPage
      );
      setPopularOnNetflix(popularOnNetflixData);
    };
    fetchPopularOnNetflix();
  }, [popularOnNetflixPage]);

  const handlePageChange = (category, increment) => {
    switch (category) {
      case "newReleases":
        setNewRealeasesPage((prevPage) => prevPage + increment);
        break;
      case "trending":
        setTrendingContentPages((prevPage) => prevPage + increment);
        break;
      case "recommended":
        setRecommendedMoviesPage((prevPage) => prevPage + increment);
        break;
      case "adventure":
        setAdventureMoviesPage((prevPage) => prevPage + increment);
        break;
      case "comedy":
        setComedyMoviesPage((prevPage) => prevPage + increment);
        break;
      case "horror":
        setHorrorMoviesPage((prevPage) => prevPage + increment);
        break;
      case "romantic":
        setRomanticMoviesPage((prevPage) => prevPage + increment);
        break;
      case "onlyonNetflix":
        setOnlyonNetflixMoviesPage((prevPage) => prevPage + increment);
        break;
      case "popularonNetflix":
        setPopularOnNetflixPage((prevPage) => prevPage + increment);
        break;
      default:
        break;
    }
  };

  return (
    <div className="homePage">
      <Navbar />
      {searching && (
        <>
          <MovieTrailer />
          <div className="movieCategoriesContainer">
            <div className="subCategoriesContainer">
              <h1 className="categoryName">New Releases</h1>
              <div className="categoriesMovieList">
                <div className="paginationButtons">
                  <button
                    onClick={() => {
                      handlePageChange("newReleases", -1);
                    }}
                    disabled={newReleasesPage === 1}
                  >
                    <ArrowBackIosIcon className="arrowIcon" />
                  </button>
                  <button
                    onClick={() => {
                      handlePageChange("newReleases", 1);
                    }}
                  >
                    <ArrowForwardIosIcon className="arrowIcon" />
                  </button>
                </div>
                {newReleases.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    className="categoriesCard"
                    match="80% Match"
                    key={index}
                    videoUrl={movie.video_url}
                  />
                ))}
              </div>
            </div>

            <div className="subCategoriesContainer">
              <h1 className="categoryName">Trending Content</h1>
              <div className="categoriesMovieList">
                <div className="paginationButtons">
                  <button
                    onClick={() => {
                      handlePageChange("trending", -1);
                    }}
                    disabled={trendingContentPage === 1}
                  >
                    <ArrowBackIosIcon className="arrowIcon" />
                  </button>
                  <button
                    onClick={() => {
                      handlePageChange("trending", 1);
                    }}
                  >
                    <ArrowForwardIosIcon className="arrowIcon" />
                  </button>
                </div>
                {trendingContent.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    className="categoriesCard"
                    match="90% Match"
                    key={index}
                    videoUrl={movie.video_url}
                  />
                ))}
              </div>
            </div>
            <div className="subCategoriesContainer">
              <h1 className="categoryName">Popular on Netflix</h1>
              <div className="categoriesMovieList">
                <div className="paginationButtons">
                  <button
                    onClick={() => {
                      handlePageChange("popularonNetflix", -1);
                    }}
                    disabled={popularOnNetflixPage === 1}
                  >
                    <ArrowBackIosIcon className="arrowIcon" />
                  </button>
                  <button
                    onClick={() => {
                      handlePageChange("popularonNetflix", 1);
                    }}
                  >
                    <ArrowForwardIosIcon className="arrowIcon" />
                  </button>
                </div>
                {popularOnNetflix.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    className="categoriesCard"
                    match="90% Match"
                    key={index}
                    videoUrl={movie.video_url}
                  />
                ))}
              </div>
            </div>

            <div className="subCategoriesContainer">
              <h1 className="categoryName">Recommended Movies</h1>
              <div className="categoriesMovieList">
                <div className="paginationButtons">
                  <button
                    onClick={() => {
                      handlePageChange("recommended", -1);
                    }}
                    disabled={recommendedMoviesPage === 1}
                  >
                    <ArrowBackIosIcon className="arrowIcon" />
                  </button>
                  <button
                    onClick={() => {
                      handlePageChange("recommended", 1);
                    }}
                  >
                    <ArrowForwardIosIcon className="arrowIcon" />
                  </button>
                </div>
                {recommendedMovies.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    className="categoriesCard"
                    match="88% Match"
                    key={index}
                    videoUrl={movie.video_url}
                  />
                ))}
              </div>
            </div>

            <div className="subCategoriesContainer">
              <h1 className="categoryName">Adventure Movies</h1>
              <div className="categoriesMovieList">
                <div className="paginationButtons">
                  <button
                    onClick={() => {
                      handlePageChange("adventure", -1);
                    }}
                    disabled={adventureMoviesPage === 1}
                  >
                    <ArrowBackIosIcon className="arrowIcon" />
                  </button>
                  <button
                    onClick={() => {
                      handlePageChange("adventure", 1);
                    }}
                  >
                    <ArrowForwardIosIcon className="arrowIcon" />
                  </button>
                </div>
                {adventureMovies.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    className="categoriesCard"
                    match="60% Match"
                    key={index}
                    videoUrl={movie.video_url}
                  />
                ))}
              </div>
            </div>

            <div className="subCategoriesContainer">
              <h1 className="categoryName">Comedy Movies</h1>
              <div className="categoriesMovieList">
                <div className="paginationButtons">
                  <button
                    onClick={() => {
                      handlePageChange("comedy", -1);
                    }}
                    disabled={comedyMoviesPage === 1}
                  >
                    <ArrowBackIosIcon className="arrowIcon" />
                  </button>
                  <button
                    onClick={() => {
                      handlePageChange("comedy", 1);
                    }}
                  >
                    <ArrowForwardIosIcon className="arrowIcon" />
                  </button>
                </div>
                {comedyMovies.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    className="categoriesCard"
                    match="65% Match"
                    key={index}
                    videoUrl={movie.video_url}
                  />
                ))}
              </div>
            </div>

            <div className="subCategoriesContainer">
              <h1 className="categoryName">Horror Movies</h1>
              <div className="categoriesMovieList">
                <div className="paginationButtons">
                  <button
                    onClick={() => {
                      handlePageChange("horror", 1);
                    }}
                    disabled={horrorMoviesPage === 1}
                  >
                    <ArrowBackIosIcon className="arrowIcon" />
                  </button>
                  <button
                    onClick={() => {
                      handlePageChange("horror", 1);
                    }}
                  >
                    <ArrowForwardIosIcon className="arrowIcon" />
                  </button>
                </div>
                {horrorMovies.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    className="categoriesCard"
                    match="73% Match"
                    key={index}
                    videoUrl={movie.video_url}
                  />
                ))}
              </div>
            </div>

            <div className="subCategoriesContainer">
              <h1 className="categoryName">Romantic Movies</h1>
              <div className="categoriesMovieList">
                <div className="paginationButtons">
                  <button
                    onClick={() => {
                      handlePageChange("romantic", -1);
                    }}
                    disabled={romanticMoviesPage === 1}
                  >
                    <ArrowBackIosIcon className="arrowIcon" />
                  </button>
                  <button
                    onClick={() => {
                      handlePageChange("romantic", 1);
                    }}
                  >
                    <ArrowForwardIosIcon className="arrowIcon" />
                  </button>
                </div>
                {romanticMovies.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    className="categoriesCard"
                    match="55% Match"
                    key={index}
                    videoUrl={movie.video_url}
                  />
                ))}
              </div>
            </div>
            <div className="subCategoriesContainer">
              <h1 className="categoryName">Only on Netflix</h1>
              <div className="categoriesMovieList">
                <div className="paginationButtons">
                  <button
                    onClick={() => {
                      handlePageChange("onlyonNetflix", -1);
                    }}
                    disabled={onlyonNetflixMoviesPage === 1}
                  >
                    <ArrowBackIosIcon className="arrowIcon" />
                  </button>
                  <button
                    onClick={() => {
                      handlePageChange("onlyonNetflix", 1);
                    }}
                  >
                    <ArrowForwardIosIcon className="arrowIcon" />
                  </button>
                </div>
                {onlyonNetflixMovies.map((movie, index) => (
                  <MovieCard
                    thumbnail={movie.thumbnail}
                    title={movie.title}
                    keywords={movie.keywords}
                    showId={movie._id}
                    className="categoriesCard"
                    match="55% Match"
                    key={index}
                    videoUrl={movie.video_url}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home;
