import { useState } from 'react';
import styled from 'styled-components';

const ButtonOne = ({ id, navName, imgUrl, isNav, changeNav }) => {
  return (
    <>
      <Wrapper>
        <div
          id={id}
          onClick={changeNav}
          style={{
            backgroundImage: `url(${imgUrl}${isNav ? 'on.svg' : 'off.svg'})`,
          }}
        />
        <span style={{ color: isNav ? '#ff417d' : 'black' }}>{navName}</span>
      </Wrapper>
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
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  }
  span {
    font-size: 0.9em;
  }
`;

export default ButtonOne;
