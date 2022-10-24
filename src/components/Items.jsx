import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import dia from '../assets/Theme/dia.svg';
import download from '../assets/items/download.png';
import Spinner from './Spinner';

const Items = ({ type }) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [lastLi, setLastLi] = useState(null);
  const [end, setEnd] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setPage(0);
    setEnd(false);
    (async () => {
      let url = '';
      if (type === 'NEW') {
        url = 'https://api.plkey.app/theme?category';
      } else {
        url = `https://api.plkey.app/theme?category=${type}`;
      }
      const {
        data: { data },
      } = await axios(url);
      const sliced = data.slice(0, 8);
      setDataList([...sliced]);
      setLoading(false);
    })();
  }, [type]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && entry.isIntersecting) {
          observer.disconnect();
          setPage(page + 1);
        }
      });
    });
    lastLi && observer.observe(lastLi);
  }, [lastLi]);

  useEffect(() => {
    if (!end) {
      (async () => {
        setLoading(true);
        let url = '';
        if (type === 'NEW') {
          url = 'https://api.plkey.app/theme?category';
        } else {
          url = `https://api.plkey.app/theme?category=${type}`;
        }
        const {
          data: { data },
        } = await axios(url);
        const sliced = data.slice(page * 16, (page + 1) * 16);
        if (sliced.length < 16) setEnd(true);
        setDataList([...dataList, ...sliced]);
        setLoading(false);
      })();
    }
  }, [page]);

  const goDetail = themeId => {
    navigate(`/theme/${themeId}`);
  };

  return (
    <StyledItems>
      <div className='wrapper'>
        {!!dataList.length &&
          dataList.map((list, index) => {
            return (
              <ItemCategory key={`${index}+${list.themeId}`} ref={dataList.length - 1 === index ? setLastLi : null}>
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
                    <img src={dia} />
                    <span className='price'>{list.price}</span>
                  </div>
                </div>
              </ItemCategory>
            );
          })}
        {loading && <Spinner fixed={false} />}
      </div>
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
    padding: 10px 0px 10px 0px;
    color: #aaabb3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .tag {
      display: inline;
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

    .item-alignment {
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
