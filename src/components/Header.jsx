import styled from 'styled-components';
import { RiMoonClearLine } from 'react-icons/ri';
import { BiSun } from 'react-icons/bi';
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  console.log(isDarkMode);
  console.log(toggleDarkMode);

  return (
    <HeaderContainer>
      <Title>My Task</Title>
      <IconWrapper>
        <RiMoonClearLine size={23} />
        <BiSun size={26} />
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
  background-color: #e5e7ea;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
`;

const IconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default Header;
