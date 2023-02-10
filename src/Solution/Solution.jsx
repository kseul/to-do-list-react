import './Solution.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { useState } from 'react';

const filters = ['all', 'active', 'completed']; // 1)고정된 필터배열이 있음

const Solution = () => {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      {/* 모든 필터 정보, 현재 필터 정보, 필터변경시 호출할 setFilter */}
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
};

export default Solution;
