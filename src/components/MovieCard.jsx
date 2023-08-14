import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";

const MovieCard = ({ key, thumbmail, title, description, className = "" }) => {
  return (
    <div className={`movieCardContainer ${className}`} key={key}>
      <img src={thumbmail} alt="Movie_Image" className="movieImage" />
      <div className="movieCardContent">
        <div className="movieCardContentBtn">
          <button className="playContentBtn">
            <PlayArrowIcon className="playtBtnIcon" />
            Play
          </button>
          <button className="addContentBtn">
            <AddIcon className="addBtnIcon" />
          </button>
        </div>
        <h1 className="movieCardContentTitle">{title}</h1>
        <h2 className="movieCardContentDescription">{description}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
