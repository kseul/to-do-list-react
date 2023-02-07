import styled from 'styled-components';
import ListBox from './ListBox';

const List = () => {
  return (
    <ListContainer>
      <ListBox />
      <ListBox />
      <ListBox />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 0 0 1.5rem 1.5rem;
`;

export default List;
