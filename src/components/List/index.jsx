import styled from 'styled-components';
import ListBox from './ListBox';

const List = ({ taskList, deleteTask, handleChecked }) => {
  return (
    <ListContainer>
      {taskList.map((task) => (
        <ListBox
          task={task}
          deleteTask={deleteTask}
          id={task.id}
          handleChecked={handleChecked}
          key={task.id}
        />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 26rem;
  height: 100%;
  padding-top: 0.5rem;
  border-radius: 0 0 1.5rem 1.5rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.4rem;
    background-color: #e1e1e1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #bbc8de;
  }
`;

export default List;
