import styled from 'styled-components';

import title from '../../assets/MainNav/Title.png';
import search from '../../assets/MainNav/Search.png';

const TitleSearch = () => {
  return (
    <>
      <Inner>
        <div>
          <HeaderIcon src={title} />
        </div>
        <div>
          <HeaderIcon src={search} />
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
