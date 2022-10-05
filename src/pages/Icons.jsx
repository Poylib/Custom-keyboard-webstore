import { useRef, useState } from 'react';
import styled from 'styled-components';

const Icons = () => {
  const figures = [
    { icon: '😊', text: '맘에들어요' },
    { icon: '😍', text: '심쿵했어요' },
    { icon: '😉', text: '응원해요' },
    { icon: '🤣', text: '갖고싶어요' },
  ];

  const [userReactionCount, setUserReactionCount] = useState([0, 0, 0, 0]);

  const changeCount = e => {
    let copy = [...userReactionCount];

    copy[e.target.id] === 0 ? (copy[e.target.id] += 1) : (copy[e.target.id] -= 1);

    setUserReactionCount(copy);
  };

  return (
    <IconContainer>
      {figures.map((figure, index) => {
        return (
          <IconBox key={index} id={index} onClick={changeCount} isSelected={userReactionCount[index]}>
            <p className='icon'>{figure.icon}</p>
            <p className='comment'>{figure.text}</p>
            <p className='count'>{0 + userReactionCount[index]}</p>
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
  padding-bottom: 18px;
  border-bottom: 1px solid #f2f3f7;
`;

const IconBox = styled.div`
  text-align: center;
  color: ${props => (props.isSelected ? 'var(--pink)' : 'var(--font-gray)')};

  .icon,
  .comment,
  .count {
    pointer-events: none;
  }

  .icon {
    font-size: 24px;
  }

  .comment {
    line-height: 18px;
    font-size: 12px;
  }

  .count {
    font-size: 10px;
    line-height: 14px;
  }
`;
