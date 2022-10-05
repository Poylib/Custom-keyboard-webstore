import ButtonOne from './ButtonOne';

import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <Wrapper>
        <ButtonOne imgUrl={'../src/assets/Footer/store-solid.svg'} navName={'스토어'} />
        <ButtonOne imgUrl={'../src/assets/Footer/gem-regular.svg'} navName={'충전소'} />
        <ButtonOne imgUrl={'../src/assets/Footer/heart-solid.svg'} navName={'MY테마'} />
        <ButtonOne imgUrl={'../src/assets/Footer/gear-solid.svg'} navName={'설정'} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;   
  display: flex;
  justify-content: space-around;
  margin: 0 auto;   
  bottom: 0px;
  padding: 1vh 0 1vh 0;
  width: 100%;
  max-width: 500px;
  @media screen and (min-device-width: 760px) and (max-device-width: 920px) {
    max-width: 861px;
  }
  border-top: 1px solid rgb(215, 217, 227);
`;

export default Footer;
