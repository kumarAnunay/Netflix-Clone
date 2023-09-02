import FetchMovies from "../components/FetchMovies/FetchMovies";

const Movies = () => {
  return (
    <div className="moviesPage">
      <FetchMovies type="movie" match="75% Match" />
    </div>
  );
};

export default Movies;
