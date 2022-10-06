import { useState } from 'react';
import styled from 'styled-components';

const Navs = ({ navTypes }) => {
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
      {navTypes.map((navType, index) => {
        return (
          <Wrapper>
            <div
              id={index}
              onClick={changeNav}
              style={{
                backgroundImage: `url(${navType.imgUrl}${isNav[index] ? 'on.svg' : 'off.svg'})`,
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
