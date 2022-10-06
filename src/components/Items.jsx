import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import zem from '../assets/items/zem.png';
import download from '../assets/items/download.png';
import Spinner from './Spinner';

const Items = ({ type }) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let url = '';
    if (type === 'NEW') {
      url = 'https://api.plkey.app/theme?category';
    } else {
      url = `https://api.plkey.app/theme?category=${type}`;
    }
    setLoading(true);
    axios
      .get(url)
      .then(res => {
        setDataList(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [type]);

  const goDetail = themeId => {
    navigate(`/theme/${themeId}`);
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Wrapper>
        {dataList.map(list => {
          return (
            <ItemCategory key={list._id}>
              <div onClick={() => goDetail(list.themeId)}>
                <div>
                  <img className='image' src={list.imageUrl} />
                </div>
                <div className='title'>{list.name}</div>
                <div className='tag-container'>
                  {list.hashtag.map(tag => {
                    return (
                      <div key={tag} className='tag'>
                        #{tag}&nbsp;
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='alignment'>
                <div className='item-alignment'>
                  <img src={download} />
                  <span className='download'>{list.downloads.toLocaleString()}</span>
                </div>
                <div className='item-alignment'>
                  <img src={zem} />
                  <span className='price'>{list.price}</span>
                </div>
              </div>
            </ItemCategory>
          );
        })}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 37px;
  margin-bottom: 50px;
`;

const ItemCategory = styled.div`
  width: 48%;
  padding-bottom: 14px;
  div {
    cursor: pointer;
  }
  .image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  .title {
    display: block;
    padding-top: 10px;
    color: #42444c;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .tag-container {
    display: flex;
    padding: 10px 0px 10px 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .tag {
      display: block;
      color: #aaabb3;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      opacity: 1;
    }
  }

  .alignment {
    display: flex;
    justify-content: space-between;

    .item-alignment{
      display: flex;
      justify-content: center;
      align-items: center;
      .download {
      margin-left: 5px;
      color: #aaabb3;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
    }
    .price {
      margin-left: 5px;
      color: #7dc9fc;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
    }
    }
  }
`;
export default Items;
