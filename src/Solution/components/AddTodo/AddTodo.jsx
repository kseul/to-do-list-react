import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
    // 텍스트를 앞뒤로 다 줄인 뒤에도 길이가 0 이라면 리턴
    if (text.trim().length === 0) {
      return;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
      />
      <label htmlFor=''></label>
      <button className={styles.btn}>Add</button>
    </form>
  );
};

export default AddTodo;
