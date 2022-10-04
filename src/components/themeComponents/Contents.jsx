import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Contents = () => {
  const [imgList, setImgList] = useState([]);
  const [isLiveTheme, setIsLiveTheme] = useState(false);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get(`https://api.plkey.app/theme/6`);
        setImgList(data.figure);
        setIsLiveTheme(data.isLiveTheme);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <StyledContents>
      <div className='ad-rectangle'>광고잘이</div>
      {isLiveTheme && (
        <ImgBox>
          {imgList.map((el, i) => (
            <ImgList key={i} url={el.imageUrl} />
          ))}
        </ImgBox>
      )}
      <div className='guide-box'>
        <span>일부 앱에서는 움짤 형태로 전송되거나, 멈춰있는 이모티콘으로 전송될 수 있어요.</span>
        <a>이모티콘은 어떻게 전송하나요?</a>
      </div>
    </StyledContents>
  );
};
export default Contents;

const StyledContents = styled.div`
  width: 100%;
  .ad-rectangle {
    margin: 0 18px 40px 18px;
    height: 50px;
    background-color: #d9d9d9;
  }

  .guide-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
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
