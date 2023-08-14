import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieTrailer from "../components/MovieTrailer";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  const [newReleases, setNewRealeases] = useState([]);
  const [trendingContent, setTrendingContent] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanticMovies, setRomanticMovies] = useState([]);

  const [newReleasesPage, setNewRealeasesPage] = useState(1);
  const [trendingContentPage, setTrendingContentPages] = useState(1);
  const [recommendedMoviesPage, setRecommendedMoviesPage] = useState(1);
  const [adventureMoviesPage, setAdventureMoviesPage] = useState(1);
  const [comedyMoviesPage, setComedyMoviesPage] = useState(1);
  const [horrorMoviesPage, setHorrorMoviesPage] = useState(1);
  const [romanticMoviesPage, setRomanticMoviesPage] = useState(1);

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
            limit: 5,
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
      default:
        break;
    }
  };

  return (
    <div className="homePage">
      <Navbar />
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
            {newReleases.map((movie) => (
              <MovieCard
                key={movie.id}
                thumbmail={movie.thumbnail}
                title={movie.title}
                description={movie.description}
                className="categoriesCard"
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
            {trendingContent.map((movie) => (
              <MovieCard
                key={movie.id}
                thumbmail={movie.thumbnail}
                title={movie.title}
                description={movie.description}
                className="categoriesCard"
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
            {recommendedMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                thumbmail={movie.thumbnail}
                title={movie.title}
                description={movie.description}
                className="categoriesCard"
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
            {adventureMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                thumbmail={movie.thumbnail}
                title={movie.title}
                description={movie.description}
                className="categoriesCard"
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
            {comedyMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                thumbmail={movie.thumbnail}
                title={movie.title}
                description={movie.description}
                className="categoriesCard"
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
            {horrorMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                thumbmail={movie.thumbnail}
                title={movie.title}
                description={movie.description}
                className="categoriesCard"
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
            {romanticMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                thumbmail={movie.thumbnail}
                title={movie.title}
                description={movie.description}
                className="categoriesCard"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
