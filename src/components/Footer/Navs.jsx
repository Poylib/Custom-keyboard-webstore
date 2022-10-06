import { useState } from 'react';
import styled from 'styled-components';

import storeOn from '../../assets/Footer/store-on.svg';
import storeOff from '../../assets/Footer/store-off.svg';

import chargeOn from '../../assets/Footer/charge-on.svg';
import chargeOff from '../../assets/Footer/charge-off.svg';

import heartOn from '../../assets/Footer/heart-on.svg';
import heartOff from '../../assets/Footer/heart-off.svg';

import settingOn from '../../assets/Footer/setting-on.svg';
import settingOff from '../../assets/Footer/setting-off.svg';

const Navs = () => {
  const [isNav, setIsNav] = useState([true, false, false, false]);

  const changeNav = e => {
    const targetId = Number(e.target.id);
    let result = [];

    for (let i = 0; i < isNav.length; i++) {
      i === targetId ? result.push(true) : result.push(false);
    }

    setIsNav(result);
  };

  const navTypes = [
    {
      name: '스토어',
      onUrl: storeOn,
      offUrl: storeOff,
    },
    {
      name: '충전소',
      onUrl: chargeOn,
      offUrl: chargeOff,
    },
    {
      name: 'MY테마',
      onUrl: heartOn,
      offUrl: heartOff,
    },
    {
      name: '설정',
      onUrl: settingOn,
      offUrl: settingOff,
    },
  ];

  return (
    <>
      {navTypes.map((navType, index) => {
        return (
          <Wrapper key={index}>
            <div
              id={index}
              onClick={changeNav}
              style={{
                backgroundImage: `url(${isNav[index] ? navType.onUrl : navType.offUrl})`,
              }}
            />
            <span style={{ color: isNav[index] ? '#ff417d' : 'black' }}>{navType.name}</span>
          </Wrapper>
        );
      })}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 100%;
  div {
    border: none;
    width: 5.5vh;
    height: 4.5vh;
    margin-bottom: 1vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  }
  span {
    font-size: 0.9em;
  }
`;

export default Navs;
