import TimeMobile from './TimeMobile';
import TitleSearch from '../Nav/TitleSearch';

import styled from 'styled-components';

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
  padding: 1.5vh 0 1.5vh 0;
  max-width: 500px;
  min-width: 274px;
  @media screen and (min-device-width: 760px) and (max-device-width: 920px) {
    max-width: 861px;
    min-width: 730px;
  }
`;

export default Header;
