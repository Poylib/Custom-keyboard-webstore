import { useEffect, useState } from 'react';

import styled from 'styled-components';

const TitleSearch = () => {
  return (
    <>
      <Inner>
        <div>
          <HeaderIcon src='../src/assets/MainNav/Title.png' />
        </div>
        <div>
          <HeaderIcon src='../src/assets/MainNav/Search.png' />
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
  margin-bottom: 3vh;
`;

const HeaderIcon = styled.img`
  height: 20px;
  width: auto;
  margin-right: 5px;
  color: black;
  cursor: pointer;
`;

export default TitleSearch;
