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
  @media screen and (min-device-width: 769px) {
    max-width: 730px;
  }
  @media screen and (min-device-width: 541px) and (max-device-width: 768px) {
    max-width: 768px;
  }
`;

export default Header;
