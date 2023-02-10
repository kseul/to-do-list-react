import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo) => setTodos([...todos, todo]);

  const handleUpdate = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo))); // 📌

  const handleDelete = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));

  const filtered = getFilteredItems(todos, filter);

  return (
    // TodoList 컴포넌트에서는 투두를 받아서 그것을 보여주기만 함
    <section>
      <ul>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      {/* AddTodo 컴포넌트는 사용자 입력을 받는 모든 로직을 넣음 (분리) */}
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

const getFilteredItems = (todos, filter) => {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
};

export default TodoList;
