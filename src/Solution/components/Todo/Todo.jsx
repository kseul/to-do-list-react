import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { text, status } = todo;

  // 📌 삼항연산자로 두가지 상태를 컨트롤하여 상위 onUpdate컴포넌트에 올려준다. 즉, 이곳에서 변경된 체크상태를 이곳 컴포넌트에서 값을 조절 -> 상위로 업데이트되도록 올려줌
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  return (
    <li>
      <input
        type='checkbox'
        id='checkbox'
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>{text}</label>
      <button>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default Todo;
