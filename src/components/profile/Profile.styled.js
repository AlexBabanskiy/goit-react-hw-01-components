import styled from 'styled-components';

export const ListProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 280px;
  background-color: #fff;
  box-shadow: 1px 1px 8px 0px #000000;
  margin-bottom: 50px;
`;

export const ImgProfile = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
`;

export const NameProfile = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;

export const UlProfile = styled.ul`
  display: flex;
`;

export const LiProfile = styled.li`
  text-align: center;
  width: 100%;
  padding: 6px;
  border: #000000 1px solid;
  font-size: 14px;
  background-color: rgb(245, 237, 237);
`;
