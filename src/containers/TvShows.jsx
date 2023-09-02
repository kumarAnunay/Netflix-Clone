import FetchMovies from "../components/FetchMovies/FetchMovies";

const TvShows = () => {
  return (
    <div className="tvShowsPage">
      <FetchMovies type="tv show" match="67% Match" />
    </div>
  );
};

export default TvShows;
