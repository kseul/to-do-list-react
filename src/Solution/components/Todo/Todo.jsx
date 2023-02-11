import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { id, text, status } = todo;

  // 📌 삼항연산자로 두가지 상태를 컨트롤하여 상위 onUpdate컴포넌트에 올려준다. 즉, 이곳에서 변경된 체크상태를 이곳 컴포넌트에서 값을 조절 -> 상위로 업데이트되도록 올려줌
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={`checkbox${id}`}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={`checkbox${id}`}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.btn} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
};

export default Todo;
