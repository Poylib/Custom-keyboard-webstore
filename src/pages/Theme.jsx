import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Icons from './Icons';
import InquiryButton from './InquiryButton';
import PurchaseButton from './PurchaseButton';

const Theme = () => {
  const [price, setPrice] = useState(0);
  axios.get('https://api.plkey.app/theme/6').then(res => {
    setPrice(res.data.data.price);
  });
  return (
    <>
      <StyledTheme>
        <Icons />
        <InquiryButton />
        <PurchaseButton price={price} />
      </StyledTheme>
    </>
  );
};
export default Theme;

const StyledTheme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
