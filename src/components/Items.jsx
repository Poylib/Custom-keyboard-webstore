import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';

import zem from '../assets/items/zem.png';
import download from '../assets/items/download.png';
import Spinner from './Spinner';

const Items = ({ type }) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const obsRef = useRef(null);
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
    <StyledItems>
      <div className='wrapper'>
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
                <div>
                  <img src={download} />
                  <span className='download'>{list.downloads.toLocaleString()}</span>
                </div>
                <div>
                  <img src={zem} />
                  <span className='price'>{list.price}</span>
                </div>
              </div>
            </ItemCategory>
          );
        })}
      </div>
      {/* {load && <span>로딩중</span>} */}
      <div ref={obsRef}>observer</div>
    </StyledItems>
  );
};

const StyledItems = styled.div`
  margin-top: 37px;
  margin-bottom: 60px;
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
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
    border-radius: 5px;
  }
  .title {
    display: block;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .tag {
      display: block;
      color: #aaabb3;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      opacity: 1;
    }
  }

  .alignment {
    display: flex;
    justify-content: space-between;

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
`;
export default Items;
