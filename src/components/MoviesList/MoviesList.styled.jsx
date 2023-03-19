import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 20px;
`;

export const MoviesGallegy = styled.ul`
      display: flex;
    gap: 30px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const Img = styled.img`
width: 300px;
height: 450px;
`;

export const MovieItem = styled.li`
  border: 1px solid #ccc;
  width: 300px;
  border-radius: 4px;
  transition: scale 250ms linear;
  box-shadow: 3px 2px 2px #727171;
  list-style: none;
  
  &:hover {
    scale: 1.1;
  }
`;

export const MovieName = styled.p`
  font-size: 17px;
  font-weight: 600;
  max-height: 43px;
  padding: 10px 15px;
  width: inherit;

`;
