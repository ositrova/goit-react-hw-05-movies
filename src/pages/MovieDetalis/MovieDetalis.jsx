import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  Container,
  MovieDescription,
  SubTitle,
  DescrItem,
  SubText,
  Link,
  Item,
} from './MovieDetalies.styled';
import { fetchMovieById } from 'services/API';
import { BackLink } from 'components/BackLink/BackLink';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/home';

  useEffect(() => {
    const getMovieById = async movieId => {
      try {
        setShowLoader(true);
        const movieData = await fetchMovieById(movieId);
        setMovie(movieData);
      } catch (error) {
        setError(error);
      } finally {
        setShowLoader(false);
      }
    };
    getMovieById(movieId);
  }, [movieId]);

  const poster = poster_path => {
    if (poster_path === null) {
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeCc8t0O8PhLI5qowdE8upNe2aI9gm1Vvaw&usqp=CAU';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };

  return (
    <main>
      {error && <p>Try again</p>}
      {showLoader && <div>Load info</div>}
      {movie && !showLoader && (
        <>
          <BackLink to={backLinkHref}>Back</BackLink>
          <Container>
            <div>
              <img
                src={`${poster(movie.poster_path)}`}
                alt={`${movie.title || movie.original_title || movie.name}`}
              />
            </div>
            <div>
              <MovieDescription>
                <h2>
                  {`${movie.title || movie.original_title || movie.name} `}
                  {`(${parseInt(movie.release_date)})`}
                </h2>
                <ul>
                  <DescrItem>
                    <SubTitle>Vote / Votes</SubTitle>
                    <SubText>
                      <span>{`${movie.vote_average.toFixed(1)}`}</span>
                      <span> / </span>
                      <span>{`${movie.vote_count}`}</span>
                    </SubText>
                  </DescrItem>
                  <DescrItem>
                    <SubTitle>Popularity</SubTitle>
                    <SubText>{`${movie.popularity.toFixed(1)}`}</SubText>
                  </DescrItem>
                  <DescrItem>
                    <SubTitle>Overview</SubTitle>
                    <SubText>{`${movie.overview}`}</SubText>
                  </DescrItem>
                  <DescrItem>
                    <SubTitle>Genres</SubTitle>
                    <SubText>{`${movie.genres
                      .map(({ name }) => name)
                      .join(', ')}`}</SubText>
                  </DescrItem>
                </ul>
              </MovieDescription>
            </div>
          </Container>
          <ul>
            <Item>
              <Link to="cast" state={{ from: location.state?.from ?? '/cast' }}>
                Cast
              </Link>
            </Item>
            <Item>
              <Link
                to="reviews"
                state={{ from: location.state?.from ?? '/reviews' }}
              >
                Reviews
              </Link>
            </Item>
          </ul>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
