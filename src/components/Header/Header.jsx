import styled from 'styled-components';

import TimeMobile from './TimeMobile';

const Header = () => {
  return (
    <>
      <Wrapper>
        <TimeMobile />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  left: 1vw;
  right: 1vw;
  padding: 0 0 1.5vh 0;

  @media screen and (min-device-width: 541px) {
    max-width: 738px;
  }
`;

export default Header;
