import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import zem from '../assets/items/zem.png';
import download from '../assets/items/download.png';

const Items = ({ type }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    let url = '';
    if (type === 'NEW') {
      url = 'https://api.plkey.app/theme?category';
    } else {
      url = `https://api.plkey.app/theme?category=${type}`;
    }
    axios
      .get(url)
      .then(res => {
        setDataList(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [type]);

  return (
    <>
      <Wrapper>
        {dataList.map(list => {
          return (
            <ItemCategory key={list._id}>
              <div>
                <img className='image' src={list.imageUrl} />
              </div>
              <div className='title'>{list.name}</div>
              <div className='flex'>
                {list.hashtag.map(tag => {
                  return (
                    <div key={tag} className='tag'>
                      #{tag}
                    </div>
                  );
                })}
              </div>
              <div className='alignment'>
                <div>
                  <img src={download} />
                  <span className='download'>{list.downloads}</span>
                </div>
                <div>
                  <img src={zem} />
                  <span className='price'>10</span>
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
  justify-content: center;
  width: 100%;
  margin-top: 37px;
`;

const ItemCategory = styled.div`
  width: 49%;
  padding: 0 14px 0 14px;

  .image {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #42444c;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .flex {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .tag {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #aaabb3;
    opacity: 1;
    display: block;
  }
  .alignment {
    display: flex;
    justify-content: space-between;

    .download {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      color: #aaabb3;
    }
    .price {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      color: #7dc9fc;
    }
  }
`;
export default Items;
