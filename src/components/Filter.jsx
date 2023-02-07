import styled from 'styled-components';

const Filter = () => {
  return (
    <FilterContainer>
      <FilterBtn>All</FilterBtn>
      <FilterBtn>Active</FilterBtn>
      <FilterBtn>Completed</FilterBtn>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 4.5rem;
  background-color: #e5e7ea;
`;

const FilterBtn = styled.button`
  margin: 1.2rem 0rem;
  height: 2.2rem;
  font-size: 0.9rem;
  color: #999999;
  background: none;
  font-weight: 400;
  transition: color 250ms ease-in-out;
  &:first-child {
    padding: 0 1.4rem;
  }
  &:nth-child(2) {
    padding: 0 1.2rem;
  }
  &:last-child {
    margin-right: 0.5rem;
  }
  &:after {
    display: block;
    content: '';
    transform: translate(5rem, 0);
    border-bottom: solid 2px #fff;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover {
    color: white;
    cursor: pointer;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

export default Filter;
