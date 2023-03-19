import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  box-shadow: 3px 2px 2px #727171;
  width: 150px;
  border-radius: 4px;
  justify-content: space-evenly;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    color: #68aaf0;
  }
`;
