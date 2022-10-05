import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Spinner from '../components/Spinner';
import styled from 'styled-components';
import Contents from '../components/themeComponents/Contents';

const Theme = () => {
  const [imgList, setImgList] = useState([]);
  const [isLiveTheme, setIsLiveTheme] = useState(false);
  const [price, setPrice] = useState('');
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
        // setPrice(data.price); price 맛나 ? 몰루
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
    <StyledTheme>
      <Contents imgList={imgList} isLiveTheme={isLiveTheme} />
      {/* 현님 컴포넌트 */}
    </StyledTheme>
  );
};

export default Theme;

const StyledTheme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
