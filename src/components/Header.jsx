import styled from 'styled-components';
import { RiMoonClearLine } from 'react-icons/ri';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>My Task</Title>
      <IconWrapper>
        <RiMoonClearLine size={23} />
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
  padding: 0 2rem;
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
