import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';

const CategoryList = ({ setType }) => {
  const [category, setCategory] = useState([]);
  const [select, setSelect] = useState('NEW');

  const selectCss = {
    borderBottom: '2px solid rgb(255, 65, 125)',
    color: 'rgb(255, 65, 125)',
    fontWeight: '700',
  };

  const nonSelectCss = {
    color: 'rgb(170, 171, 179)',
    fontWeight: '400',
  };

  useEffect(() => {
    axios.get('https://api.plkey.app/theme/category').then(res => {
      setCategory(res.data.data);
    });
  }, []);

  return (
    <>
      <Swiper slidesPerView={'auto'} style={{ top: '20px', width: '100%', overflow: 'hidden' }}>
        {category.map(element => {
          return (
            <SwiperSlide
              key={element}
              onClick={() => {
                setSelect(element);
                setType(element);
              }}
              style={{ width: 'auto', paddingBottom: '10px', paddingRight: '20px' }}
            >
              <CategoryOne style={select === element ? selectCss : nonSelectCss}>{element}</CategoryOne>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

const CategoryOne = styled.span`
  padding-bottom: 13px;
  cursor: pointer;
  font-size: 1.1em;
  line-height: 2.4em;
`;

export default CategoryList;
