import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastName, CastImg, CastCharacter, CastItem } from './Cast.styled';
import { fetchCast } from 'services/API';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const response = await fetchCast(movieId);

      setCast(response.cast);
    };
    getCast();
  }, [movieId]);

  if (!cast) {
    return;
  }

  const poster = profile_path => {
    if (profile_path === null) {
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeCc8t0O8PhLI5qowdE8upNe2aI9gm1Vvaw&usqp=CAU';
    }
    return `https://image.tmdb.org/t/p/w300${profile_path}`;
  };

  return (
    <>
      <CastList>
        {cast.length !== 0 ? (
          cast.map(({ id, name, character, profile_path }) => (
            <CastItem key={id}>
              <CastImg src={`${poster(profile_path)}`} alt="name" />
              <CastName>{name}</CastName>
              <CastCharacter>Character: {character}</CastCharacter>
            </CastItem>
          ))
        ) : (
          <p>No info</p>
        )}
      </CastList>
    </>
  );
};

export default Cast;
