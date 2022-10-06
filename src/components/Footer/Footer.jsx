import { useState } from 'react';
import styled from 'styled-components';

import ButtonOne from './ButtonOne';

const Footer = () => {
  const navTypes = [
    {
      name: '스토어',
      imgUrl: '../src/assets/Footer/store-',
    },
    {
      name: '충전소',
      imgUrl: '../src/assets/Footer/charge-',
    },
    {
      name: 'MY테마',
      imgUrl: '../src/assets/Footer/heart-',
    },
    {
      name: '설정',
      imgUrl: '../src/assets/Footer/setting-',
    },
  ];

  const [isNav, setIsNav] = useState([true, false, false, false]);

  const changeNav = e => {
    const targetId = Number(e.target.id);
    let result = [];

    for (let i = 0; i < isNav.length; i++) {
      i === targetId ? result.push(true) : result.push(false);
    }

    setIsNav(result);
  };

  return (
    <>
      <Wrapper>
        {navTypes.map((navType, index) => {
          return <ButtonOne key={index} id={index} imgUrl={navType.imgUrl} navName={navType.name} isNav={isNav[index]} changeNav={changeNav} />;
        })}
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
