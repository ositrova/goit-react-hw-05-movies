import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  list-style: none;
    gap: 16px;
    flex-wrap: wrap;

`;
export const CastItem = styled.li`
  width: 150px;
  height: 350px;

`;
export const CastImg = styled.img`
  width: 150px;
  height: 225px;
`;

export const CastName = styled.p`
  font-size: 14px;
  padding: 12px 0;
  font-weight: 600;
  margin: 0;
`;

export const CastCharacter = styled.p`
  font-size: 14px;
  padding: 12px 0;
  margin: 0;
`;
