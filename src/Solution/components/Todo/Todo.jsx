import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { id, text, status } = todo;

  // ๐ ์ผํญ์ฐ์ฐ์๋ก ๋๊ฐ์ง ์ํ๋ฅผ ์ปจํธ๋กคํ์ฌ ์์ onUpdate์ปดํฌ๋ํธ์ ์ฌ๋ ค์ค๋ค. ์ฆ, ์ด๊ณณ์์ ๋ณ๊ฒฝ๋ ์ฒดํฌ์ํ๋ฅผ ์ด๊ณณ ์ปดํฌ๋ํธ์์ ๊ฐ์ ์กฐ์  -> ์์๋ก ์๋ฐ์ดํธ๋๋๋ก ์ฌ๋ ค์ค
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
