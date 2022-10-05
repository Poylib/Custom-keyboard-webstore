import { useState } from 'react';
import styled from 'styled-components';

const UserResponseArea = () => {
  const figures = [
    { icon: '😊', text: '맘에들어요' },
    { icon: '😍', text: '심쿵했어요' },
    { icon: '😉', text: '응원해요' },
    { icon: '🤣', text: '갖고싶어요' },
  ];

  const [userResponseCount, setUserResponseCount] = useState([0, 0, 0, 0]);

  const changeCount = e => {
    let copy = [...userResponseCount];

    copy[e.target.id] === 0 ? (copy[e.target.id] += 1) : (copy[e.target.id] -= 1);

    setUserResponseCount(copy);
  };

  return (
    <ResponseWrapper>
      {figures.map((figure, index) => {
        return (
          <ResponeseBox key={index} id={index} onClick={changeCount} isSelected={userResponseCount[index]}>
            <p className='icon'>{figure.icon}</p>
            <p className='comment'>{figure.text}</p>
            <p className='count'>{0 + userResponseCount[index]}</p>
          </ResponeseBox>
        );
      })}
    </ResponseWrapper>
  );
};

export default UserResponseArea;

const ResponseWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 18px;
  border-bottom: 1px solid #f2f3f7;

  @media screen and (min-width: 768px) {
    padding-bottom: 25px;
  }
`;

const ResponeseBox = styled.div`
  text-align: center;
  color: ${props => (props.isSelected ? 'var(--pink)' : 'var(--font-gray)')};
  cursor: pointer;

  .icon,
  .comment,
  .count {
    pointer-events: none;
  }

  .icon {
    font-size: 24px;

    @media screen and (min-width: 540px) and (max-width: 768px) {
      font-size: 30px;
    }

    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
  }

  .comment {
    margin-top: 5px;
    line-height: 18px;
    font-size: 12px;

    @media screen and (min-width: 540px) and (max-width: 768px) {
      font-size: 15px;
      line-height: 25px;
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 38px;
    }
  }

  .count {
    font-size: 10px;
    line-height: 14px;

    @media screen and (min-width: 540px) and (max-width: 768px) {
      font-size: 12px;
      line-height: 20px;
    }

    @media screen and (min-width: 768px) {
      font-size: 15px;
    }
  }
`;
