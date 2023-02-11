import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

const TodoList = ({ filter }) => {
  /*
   ❗️❗️ 함수를 호출해서 데이터를 읽어오거나 로컬스토리지를 사용하거나 파일을 사용하거나 네트워크상에서 읽어오는 등의 일처리를 할 때는 위 함수(TodoList)가 호출될 때마다 반복해서 계속 읽어오게 된다.
   내부적으로 읽어온 값대신, 내부적으로 가지고 있는 값을 쓸것이므로 UI업데이트는 되지않음. 하지만! 계속 불필요한 통신을 (읽어오게)하게된다. 
   -> 이렇게 함수를 읽거나 무거운 함수를 처리하거나 등의 일을 방지하기 위해서는 콜백으로 감싸주기
   */
  // const [todos, setTodos] = useState(readTodosFromLocalStorage());
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleAdd = (todo) => setTodos([...todos, todo]);

  const handleUpdate = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo))); // 📌

  const handleDelete = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);

  return (
    // TodoList 컴포넌트에서는 투두를 받아서 그것을 보여주기만 함
    <section className={styles.container}>
      <ul className={styles.list}>
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

function readTodosFromLocalStorage() {
  console.log('hi');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}
// 함수내부의 다른 상태와 밀접하게 연관있는 함수가 아니라면, 차라리 인자로 받아서 외부에 선언하는것이 메모리측면에서 좋다.
const getFilteredItems = (todos, filter) => {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
};

export default TodoList;
