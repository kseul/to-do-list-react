import styled from 'styled-components';
import ListBox from './ListBox';

const List = ({ taskList, deleteTask, handleChecked, filterType }) => {
  return (
    <ListContainer>
      {/* 필터링 5)
          props로 받아온 내가 클릭한 filterType 상태값과
          taskList를 map으로 돌려서 각각의 task에 부여해준 type을 비교하여 렌더링
          이때 filter가 아닌 map을 쓰는 것에 유의!
       */}
      {taskList.map((task) => {
        // 초기값이 All임 => 초기렌더링시 전체 렌더링
        // 다른 타입 클릭후 다시 클릭한 타입이 All일때 => 다시 전체 렌더링
        if (filterType === 'All') {
          return (
            <ListBox
              task={task}
              deleteTask={deleteTask}
              id={task.id}
              handleChecked={handleChecked}
              key={task.id}
            />
          );
        } // 내가 클릭한 필터타입 === task가 가지고 있는 type의 이름이 일치할 경우의 task만 맵을 돌려서 리턴한다.
        else if (filterType === task.type) {
          return (
            <ListBox
              task={task}
              deleteTask={deleteTask}
              id={task.id}
              handleChecked={handleChecked}
              key={task.id}
            />
          );
        }
      })}
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
