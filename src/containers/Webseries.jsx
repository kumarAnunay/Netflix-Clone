import FetchMovies from "../components/FetchMovies";

const Webseries = () => {
  return (
    <div className="webseriesPage">
      <FetchMovies type="web series" match="70% Match" />
    </div>
  );
};

export default Webseries;
