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
      task: '코딩하기✍️',
    },
    {
      id: 2,
      task: '언덕오르기🔥',
    },
    {
      id: 3,
      task: '미라클모닝 하기✨',
    },
  ]);
  const taskId = useRef(4);

  const handleSubmit = (e) => {
    if (task === '') return;
    e.preventDefault();
    setTaskList([...taskList, { id: taskId.current, task: task }]);
    setTask('');
    taskId.current++;
    console.log(taskId.current);
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <AppContainer>
      <AppBox>
        <Header />
        <Filter />
        <List taskList={taskList} />
        <AddForm
          task={task}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
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
