import styled from 'styled-components';

import { useEffect, useState } from 'react';

const TimeMobile = () => {
  const [currentHour, setCurrentHour] = useState(new window.Date().getHours());
  const [currentMin, setCurrentMin] = useState(new window.Date().getMinutes());

  useEffect(() => {
    if (String(new window.Date().getHours()).length == 2) {
      setCurrentHour(new window.Date().getHours());
    } else {
      setCurrentHour('0' + new window.Date().getHours());
    }

    if (String(new window.Date().getMinutes()).length == 2) {
      setCurrentMin(new window.Date().getMinutes());
    } else {
      setCurrentMin('0' + new window.Date().getMinutes());
    }
  }, [new window.Date().getMinutes()]);

  return (
    <>
      <Inner>
        <TimeWrapper>
          <span>
            {currentHour}:{currentMin}
          </span>
        </TimeWrapper>
        <div>
          <HeaderIcon src='../src/assets/Header/signal-solid.svg' />
          <HeaderIcon src='../src/assets/Header/wifi-solid.svg' />
          <HeaderIcon src='../src/assets/Header/battery-full-solid.svg' />
        </div>
      </Inner>
    </>
  );
};

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: white;
`;

const TimeWrapper = styled.div`
  display: flex;
  justify-content: left;
  padding-left: 1vh;
  span {
    font-size: 1em;
    font-weight: 700;
    line-height: 17.9px;
    letter-spacing: -0.3px;
    text-align: center;
  }
`;

const HeaderIcon = styled.img`
  width: 15px;
  height: auto;
  margin-right: 5px;
`;

export default TimeMobile;
