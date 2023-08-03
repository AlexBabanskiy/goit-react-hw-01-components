import styled from 'styled-components';

export const List = styled.ul`
  color: red;
  margin-top: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 5px;
`;

export const ListItem = styled.li`
  display: flex;
  width: 150px;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  text-align: center;
  padding: 20px;
  box-shadow: 2px 2px 2px 1px #000000;
  margin-bottom: 5px;
`;
