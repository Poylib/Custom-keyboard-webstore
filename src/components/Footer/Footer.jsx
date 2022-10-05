import styled from 'styled-components';

import ButtonOne from './ButtonOne';

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
  bottom: 0px;
  padding: 1vh 0 1vh 0;
  width: 100%;
  @media screen and (min-device-width: 769px) {
    max-width: 650px;
  }
  @media screen and (min-device-width: 541px) and (max-device-width: 768px) {
    max-width: 768px;
  }
  border-top: 1px solid rgb(215, 217, 227);
  background-color: white;
`;

export default Footer;
