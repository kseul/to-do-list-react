import styled from 'styled-components';

const AddForm = () => {
  return (
    <AddFormContainer>
      <AddList>
        <AddInput></AddInput>
        <AddBtn>Add</AddBtn>
      </AddList>
    </AddFormContainer>
  );
};

const AddFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  background-color: #e5e7ea;
  border-radius: 0 0 1.5rem 1.5rem;
`;

const AddList = styled.div`
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
