import { useRef } from 'react';
import styled from 'styled-components';

const Icons = () => {
  const companyCardRef = useRef([]);

  const figures = ['😊', '😍', '😉', '🤣'];

  return (
    <IconContainer>
      {figures.map((figure, index) => {
        return (
          <IconBox key={index}>
            <Icon>{figure}</Icon>
            <Text>맘에들어요</Text>
            <Num>0</Num>
          </IconBox>
        );
      })}
    </IconContainer>
  );
};

export default Icons;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  border-bottom: 1px solid #f2f3f7;
`;

const IconBox = styled.div`
  p {
    text-align: center;
  }
`;

const Icon = styled.p`
  font-size: 24px;
`;

const Text = styled.p`
  line-height: 18px;
  font-size: 12px;
  color: black;
`;

const Num = styled.p`
  font-size: 10px;
  line-height: 14px;
  margin-bottom: 18px;
`;
