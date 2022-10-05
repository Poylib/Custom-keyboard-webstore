import styled from 'styled-components';

import CategoryList from './CategoryList';
import TitleSearch from './TitleSearch';

const Title = ({ type, setType }) => {
  return (
    <>
      <Wrapper>
        <TitleSearch />
        <Name>취향대로 골라보기</Name>
        <CategoryList type={type} setType={setType} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 5vh;
`;

const Name = styled.span`
  font-size: 1.2em;
  font-weight: 700;
  line-height: 24px;
`;

export default Title;
