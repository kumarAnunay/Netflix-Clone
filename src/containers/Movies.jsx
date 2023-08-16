import FetchMovies from "../components/FetchMovies";

const Movies = () => {
  return (
    <div className="moviesPage">
      <FetchMovies type="movie" />
    </div>
  );
};

export default Movies;
