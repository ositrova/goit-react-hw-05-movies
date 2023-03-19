import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  padding: 0 20px;
`;

export const Input = styled.input`
  width: 400px;
  margin-right: 12px;
  padding: 8px 16px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #68aaf0;
  border: 1px solid #68aaf0;
  padding: 8px 16px;
  box-shadow: 3px 2px 2px #727171;
  border-radius: 4px;
  color: #fff;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: #68aaf0;
    background-color: #fff;
  }
`;
