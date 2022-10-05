import axios from 'axios';
import styled from 'styled-components';
import Spinner from '../Spinner';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Contents = () => {
  const [imgList, setImgList] = useState([]);
  const [isLiveTheme, setIsLiveTheme] = useState(false);
  const [loding, setLoding] = useState(false);
  const params = useParams();
  useEffect(() => {
    (async () => {
      setLoding(true);
      try {
        const {
          data: { data },
        } = await axios.get(`https://api.plkey.app/theme/${params.id}`);
        setImgList(data.figure);
        setIsLiveTheme(data.isLiveTheme);
        setLoding(false);
      } catch (error) {
        console.log(error);
        alert('통신 실패하였습니다.');
        setLoding(true);
      }
    })();
  }, []);

  if (loding) {
    return <Spinner />;
  }

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
  font-size: 14px;
  .ad-rectangle {
    margin: 24px 18px 40px 18px;
    height: 50px;
    background-color: #d9d9d9;
  }

  .guide-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 45px;
    /* font-size: 1rem; */
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
