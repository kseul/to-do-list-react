import styled from 'styled-components';
import Header from './components/Header';
import Filter from './components/Filter';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  return (
    <AppContainer>
      <AppBox>
        <Header />
        <Filter />
        <List />
        <Footer />
      </AppBox>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 40rem;
  background-color: #ffffff;
  border-radius: 1.5rem;
  box-shadow: 5px 5px 30px -20px #a3a3a3;
`;

export default App;
