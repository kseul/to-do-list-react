import styled from 'styled-components';
import Header from './components/Header';
import Filter from './components/Filter';
import List from './components/List';
import AddForm from './components/AddForm';
import { useRef, useState } from 'react';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [filterType, setFilterType] = useState('All'); // 필터링 2) 온클릭으로 전달된 상태값 저장
  const taskId = useRef(0);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task === '') return;
    setTaskList([
      ...taskList,
      { id: taskId.current, task, isChecked: false, type: 'Active' },
    ]);
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

  const filtering = (filter) => {
    setFilterType(filter);
  };

  // 필터링 3) 각 task에 체크 유무에 따른 필터값을 부여해준다.
  const handleChecked = (id, e) => {
    const checked = e.target.checked;
    setTaskList(
      taskList.map((task) => {
        // 내가 선택한 task의 id가 일치해야하고 && 체크가 true일때 'Completed'로 설정
        if (task.id === id && checked) {
          return {
            ...task,
            isChecked: checked, // true
            type: 'Completed',
          };
        }
        // 내가 선택한 task의 id가 일치, 위에서 체크가 true가 아닌 false로 걸러질 때 이 문으로 내려옴
        else if (task.id === id) {
          return {
            ...task,
            isChecked: checked, // false
            type: 'Active',
          };
        }
        // 내가 선택한 값이 아닐때 변동주지 않기 (체크가 false이든 true이든 상관x)
        else return task;
      })
    );
  };
  console.log();

  return (
    <DarkModeProvider>
      <AppContainer>
        <AppBox>
          <Header />
          <Filter filtering={filtering} />
          <List
            taskList={taskList}
            deleteTask={deleteTask}
            handleChecked={handleChecked}
            filterType={filterType} // 필터링 4) 클릭한 필터 상태값을 전달
          />
          <AddForm
            task={task}
            handleInputChange={handleInputChange}
            addTask={addTask}
          />
        </AppBox>
      </AppContainer>
    </DarkModeProvider>
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
