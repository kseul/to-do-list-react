import styled from 'styled-components';
import { RiMoonClearLine } from 'react-icons/ri';
import { BiSun } from 'react-icons/bi';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <HeaderContainer darkMode={isDarkMode}>
      <Title darkMode={isDarkMode}>My Task</Title>
      <IconWrapper>
        {isDarkMode ? (
          <BiSun onClick={toggleDarkMode} size={26} fill='#fff' />
        ) : (
          <RiMoonClearLine onClick={toggleDarkMode} size={23} />
        )}
      </IconWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0.6rem 2rem 0 2rem;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: ${(props) => (props.darkMode ? '#07224b' : '#e5e7ea')};
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) => (props.darkMode ? '#ececec' : 'none')};
`;

const IconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
export default Header;
