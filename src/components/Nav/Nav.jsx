import CategoryList from './CategoryList';
import TitleSearch from './TitleSearch';

import styled from 'styled-components';

const Title = () => {
  return (
    <>
      <Wrapper>
        <TitleSearch />
        <Name>취향대로 골라보기</Name>
        <CategoryList />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 5vh;
  max-width: 500px;
  min-width: 302px;
`;

const Name = styled.span`
  font-size: 1.2em;
  font-weight: 700;
  line-height: 24px;
`;

export default Title;
