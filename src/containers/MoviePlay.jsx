import { useLocation } from "react-router";

const MoviePlay = () => {
  const location = useLocation();
  const videoUrl = location.state?.videoUrl;
  return (
    <div className="videoPlayContainer">
      <video autoPlay controls className="movieVideo">
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default MoviePlay;
