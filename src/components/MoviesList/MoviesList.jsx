import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  MoviesGallegy,
  Container,
  MovieName,
  MovieItem,
  Link,
  Img,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const poster = poster_path => {
    if (poster_path === null) {
      return 'https://i.pinimg.com/736x/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };
  return (
  
    <Container>
      <MoviesGallegy>
        {movies.map(
          ({ id, original_title, original_name, name, title, poster_path }) => (
            <MovieItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <Img
                  src={`${poster(poster_path)}`}
                  alt={`${title || original_title || name}`}
                />
                <MovieName>{original_title || original_name}</MovieName>
              </Link>
            </MovieItem>
          )
        )}
      </MoviesGallegy>
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
