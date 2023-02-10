import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([
    // {
    //   id: '123',
    //   text: '코딩하기✨',
    //   status: 'active',
    // },
    // {
    //   id: '345',
    //   text: '잠자기🌿',
    //   status: 'active',
    // },
  ]);

  const handleAdd = (todo) => {
    // 새로운 투두를 todos에 업데이트 해야함
    setTodos([...todos, todo]);
  };

  return (
    // TodoList 컴포넌트에서는 투두를 받아서 그것을 보여주기만 함
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      {/* AddTodo 컴포넌트는 사용자 입력을 받는 모든 로직을 넣음 (분리) */}
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;
