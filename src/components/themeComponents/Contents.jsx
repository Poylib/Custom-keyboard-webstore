import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Contents = ({ imgList, isLiveTheme }) => {
  return (
    <StyledContents>
      <div className='ad-rectangle'>AD</div>
      {isLiveTheme && (
        <>
          <ImgBox>
            {imgList.map((el, i) => (
              <ImgList key={i} url={el.imageUrl} />
            ))}
          </ImgBox>

          <div className='guide-box'>
            <span>일부 앱에서는 움짤 형태로 전송되거나, 멈춰있는 이모티콘으로 전송될 수 있어요.</span>
            <a>이모티콘은 어떻게 전송하나요?</a>
          </div>
        </>
      )}
    </StyledContents>
  );
};
export default Contents;

const StyledContents = styled.div`
  width: 100%;
  font-size: 90%;
  .ad-rectangle {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px 18px 40px 18px;
    height: 7.5vh;
    background-color: #d9d9d9;
  }
  .guide-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 45px;
    line-height: 24px;
    text-align: center;
    @media screen and (min-width: 540px) {
      font-size: 1.1rem;
      line-height: 25px;
    }
    span {
      margin: 0 42px;
      color: #919299;
    }
    a {
      margin-top: 3px;
      border-bottom: 2px solid #4b4e57;
      color: #4b4e57;
    }
  }
`;

const ImgBox = styled.div`
  padding: 0 14px;
  margin-bottom: 40px;
`;

const ImgList = styled.img`
  width: 33%;
  content: url(${props => props.url});
`;
