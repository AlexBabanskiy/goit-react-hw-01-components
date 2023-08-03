import styled from 'styled-components';

export const Table = styled.table`
  border: #000000 1px solid;
  width: 600px;
  text-align: center;
  margin-bottom: 50px;
`;

export const Tr = styled.tr`
  height: 25px;
  background-color: ${props => (props.isGray ? 'grey' : 'white')};
`;

export const Thead = styled.thead`
  height: 35px;
`;
