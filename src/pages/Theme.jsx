import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Spinner from '../components/Spinner';
import Contents from '../components/themeComponents/Contents';
import UserResponseArea from './UserResponseArea';
import InquiryButton from './InquiryButton';
import PurchaseButton from './PurchaseButton';
import DetailTop from './detail/DetailTop';

const Theme = () => {
  const [loding, setLoding] = useState(false);
  const [dataList, setDataList] = useState([]);

  const params = useParams();

  useEffect(() => {
    (async () => {
      setLoding(true);
      try {
        const {
          data: { data },
        } = await axios.get(`https://api.plkey.app/theme/${params.id}`);
        setLoding(false);
        setDataList(data);
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
    <>
      {dataList && (
        <StyledTheme>
          <DetailTop props={dataList} />
          <Contents figure={dataList.figure} isLiveTheme={dataList.isLiveTheme} />
          <UserResponseArea />
          <InquiryButton />
          <PurchaseButton price={dataList.price} />
        </StyledTheme>
      )}
    </>
  );
};

export default Theme;

const StyledTheme = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 768px;
  margin: 0 auto;
  --pink: rgba(255, 65, 125, 1);
  --font-gray: rgba(145, 146, 153, 1);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
