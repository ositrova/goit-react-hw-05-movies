import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  width: 80px;
  text-align: center;
  text-decoration: none;
  box-shadow: 3px 2px 2px #727171;
  color: black;
  margin-bottom: 16px;
  
  border: 1px solid #727171;
  border-radius: 4px;
  padding: 4px 6px;
  transition: color 250ms linear, border-color 250ms linear;
  &:hover {
    color: #68aaf0;
    border-color: #68aaf0;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 20px 0;
`;

export const DescrItem = styled.li`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  list-style: none;
`;

export const MovieDescription = styled.div`
  margin-left: 20px;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding: 12px 0;
  margin-right: 10px;
  width: 100px;
`;

export const SubText = styled.p`
  padding: 12px 0;
  max-width: 500px;
`;
