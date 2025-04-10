import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Hero = ({ cinema }) => {
  const navigate = useNavigate();

  const reviews = (movieId) => {
    navigate(`/Reviews/${movieId}`);
  };

  console.log("🎬 Cinema data in Hero:", cinema);

  if (!cinema || cinema.length === 0) {
    return (
      <div className="cinema-carousel-container">
        <h2>🚫 No movies to display.</h2>
      </div>
    );
  }

  return (
    <div className='cinema-carousel-container'>
      <Carousel>
        {cinema.map((movie) => {
          if (!movie?.imdbId || !movie?.poster || !movie?.title || !movie?.backdrops?.length) {
            console.warn("⚠️ Skipping incomplete movie object:", movie);
            return null;
          }

          return (
            <Paper key={movie.imdbId}>
              <div className='movie-card-container'>
                <div className='movie-card' style={{ "--img": `url(${movie.backdrops[0]})` }}>
                  <div className='movie-detail'>
                    <div className='movie-poster'>
                      <img src={movie.poster} alt={`${movie.title} Poster`} />
                    </div>
                    <div className='movie-title'>
                      <h4>{movie.title}</h4>
                    </div>
                    <div className='movie-buttons-container'>
                      <Link to={`/Trailer/${movie.trailerLink.slice(-11)}`}>
                        <div className='play-button-icon-container'>
                          <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay} />
                        </div>
                      </Link>

                      <div className='movie-review-button-container'>
                        <Button variant='info' onClick={() => reviews(movie.imdbId)}>Reviews</Button>
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

export default Hero;
