import styled from 'styled-components';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const AddForm = ({ task, addTask, handleInputChange, handleId }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <AddFormContainer darkMode={isDarkMode}>
      <AddListForm onSubmit={addTask}>
        <AddInput
          type='text'
          value={task}
          onChange={handleInputChange}
        ></AddInput>
        <AddBtn onClick={addTask}>Add</AddBtn>
      </AddListForm>
    </AddFormContainer>
  );
};

const AddFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  border-radius: 0 0 1.5rem 1.5rem;
  background-color: ${(props) => (props.darkMode ? '#07224b' : '#e5e7ea')};
`;

const AddListForm = styled.form`
  display: flex;
  width: 86%;
  height: 2.2rem;
  border-radius: 0.5rem;
  background-color: white;
`;

const AddInput = styled.input`
  width: 82%;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
`;

const AddBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18%;
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
  background-color: #aebbd4;
  border-radius: 0 0.5rem 0.5rem 0;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    background-color: #97a8c7;
  }
`;

export default AddForm;
