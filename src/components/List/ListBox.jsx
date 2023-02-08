import styled from 'styled-components';
import { FcEmptyTrash } from 'react-icons/fc';

const ListBox = ({ task, deleteTask }) => {
  return (
    <ListBoxContainer>
      <List>
        <TaskContainer>
          <CheckBox type='checkbox'></CheckBox>
          <Task>{task.task}</Task>
        </TaskContainer>
        <Delete>
          <Icon onClick={deleteTask} size={18}>
            아이콘
          </Icon>
        </Delete>
      </List>
    </ListBoxContainer>
  );
};

const ListBoxContainer = styled.ul`
  margin: 0.2rem 0;
  padding: 0;
  width: 82%;
`;

const List = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const TaskContainer = styled.div`
  display: flex;
`;

const CheckBox = styled.input`
  margin: 1rem 0.8rem 0 0;
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  cursor: pointer;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #9eb3da;
  }
`;

const Task = styled.div`
  margin-top: 0.2rem;
  font-size: 1rem;
  line-height: 3rem;
`;

const Delete = styled.div``;

const Icon = styled(FcEmptyTrash)`
  margin-top: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export default ListBox;
