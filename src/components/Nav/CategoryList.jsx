import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';

const CategoryList = ({ type, setType }) => {
  const [category, setCategory] = useState([]);

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
    <Wrapper>
      <Swiper slidesPerView={'auto'} style={{}}>
        {category.map(element => {
          return (
            <SwiperSlide
              key={element}
              onClick={() => {
                setType(element);
              }}
              style={{ width: 'auto', paddingBottom: '10px', paddingRight: '20px' }}
            >
              <CategoryOne style={type === element ? selectCss : nonSelectCss}>{element}</CategoryOne>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .swiper {
    top: 20px;
    width: 100%;
    overflow: hidden;
  }
  .swiper-slide {
    width: auto;
    padding-bottom: 10px;
    padding-right: 20px;
  }
`;

const CategoryOne = styled.span`
  padding-bottom: 13px;
  cursor: pointer;
  font-size: 1.1em;
  line-height: 2.4em;
`;

export default CategoryList;
