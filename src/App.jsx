import styled from 'styled-components';
import Header from './components/Header';
import Filter from './components/Filter';
import List from './components/List';
import AddForm from './components/AddForm';
import { useRef, useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      task: '공부하기✨',
      isChecked: false,
    },
  ]);
  const taskId = useRef(2);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task === '') return;
    setTaskList([...taskList, { id: taskId.current, task, isChecked: false }]);
    taskId.current++;
    setTask('');
  };

  const deleteTask = (e) => {
    // currentTarget 은 내가 그 버튼을 눌렀을 때, svg나 path에 따라서 target이 설정되는 것이 아니고, 그 evnet가 달린 컴포넌트가 선택되기 때문
    // 따라서 -> e.target.id (x) e.currentTarget.id (o)
    const deleteId = e.currentTarget.id;
    setTaskList(
      taskList.filter((task) => {
        return task.id !== parseInt(deleteId);
      })
    );
  };

  const handleChecked = (id, e) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, isChecked: e.target.checked };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <AppContainer>
      <AppBox>
        <Header />
        <Filter />
        <List
          taskList={taskList}
          deleteTask={deleteTask}
          handleChecked={handleChecked}
        />
        <AddForm
          task={task}
          handleInputChange={handleInputChange}
          addTask={addTask}
        />
      </AppBox>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 40rem;
  background-color: #ffffff;
  border-radius: 1.5rem;
  box-shadow: 5px 5px 30px -20px #a3a3a3;
`;

export default App;
