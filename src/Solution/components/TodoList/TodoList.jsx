import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: '123',
      text: '코딩하기✨',
      status: 'active',
    },
    {
      id: '345',
      text: '잠자기🌿',
      status: 'active',
    },
  ]);

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.key}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
