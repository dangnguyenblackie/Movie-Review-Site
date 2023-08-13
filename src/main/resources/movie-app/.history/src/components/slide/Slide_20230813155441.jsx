import "./Slide.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
const Slide = ({ movies }) => {

  function reviews(imdbId){
    navigate
  }

  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies?.map((movie) => {
          return (
            <Paper>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{ "--img": `url(${movie.backdrops[0]})` }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                    <div className="movie-button-container">
                      <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                      <div className="play-button-container">
                        <FontAwesomeIcon
                          className="play-button-icon"
                          icon={faCirclePlay}
                        />
                      </div>
                      </Link>

                      <div className="movie-review-button-container">
                          <Button variant ="info" onClick={() => reviews(movie.imdbId)} >Reviews</Button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slide;
