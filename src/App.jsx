import styled from 'styled-components';
import Header from './components/Header';
import Filter from './components/Filter';
import List from './components/List';

function App() {
  return (
    <AppContainer>
      <AppBox>
        <Header />
        <Filter />
        <List />
      </AppBox>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 40rem;
  background-color: #ffffff;
  border-radius: 1.5rem;
  box-shadow: 6px 6px 25px -25px #b5b5b5;
`;

export default App;
