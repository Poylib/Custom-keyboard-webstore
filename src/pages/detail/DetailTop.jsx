import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const DetailTopBlock = styled.div`
  .detail-inner-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 375px;
    height: 100%;
    border: 1px solid #000;
    /* 뒤로가기버튼 */
    .detail-header-box {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      margin-top: 10px;
      margin-bottom: 5px;
      .back-btn {
        svg {
          width: 24px;
          height: 24px;
          color: #2e2f33;
        }
      }
    }
    /* 상품이미지 */
    .detail-item-img-box {
      width: 100%;
      height: 264px;
      background: #ddd;
      margin-bottom: 30px;
      img {
      }
    }
    /* 상품텍스트 */
    .detail-item-text-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      .item-title {
        display: flex;
        margin-bottom: 10px;
        font: bold 20px/1 'Noto Sans KR';
        color: #42444c;
      }
      .item-category {
        display: flex;
        margin-bottom: 15px;
        font: bold 15px/1 'Noto Sans KR';
        color: #919299;
      }
      .item-tag {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 15px;
        font: bold 15px/1 'Noto Sans KR';
        color: #42444c;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 28px;
          margin-right: 5px;
          margin-bottom: 10px;
          padding: 0px 10px;
          border-radius: 20px;
          background: #ebedf5;
        }
      }
    }
  }
`;

//      웹 테마 정보 페이지를 통해 테마의 상세 정보를 보여줍니다.
//     - Figma에 주어진 디자인과 명세대로 구현합니다.
//     - 여러 디바이스에서 레이아웃이 깨지지 않도록 반응형 레이아웃으로 구현해야 합니다.
//     - 동적 라우팅을 통해 첫 번째 화면에서 전달받은 params(themeId)를 활용하여 테마 상세 정보를 불러옵니다.
//     - 상단의 뒤로가기 버튼을 눌렀을 때 **첫 번째 화면**으로 이동해야 합니다.

//      - 평가 요소
//     - UI 및 레이아웃 구현이 되었으며, 정상 작동하는지 평가합니다.
//     - API 통신을 통해 데이터를 정상적으로 처리하는지 평가합니다.
//     - 반응형 레이아웃이 정상적으로 작동하는지 평가합니다.
//     - 라우터 구현 및 동적 라우팅이 정상적으로 작동하는지 평가합니다.

const DetailTop = () => {
  const [hashtag, setHashtag] = useState('');
  const [detailImg, setDetailImg] = useState('');
  useEffect(() => {
    axios
      .get('https://api.plkey.app/theme/11')
      .then(function (res) {
        const data = res.data;
        setHashtag(res.data.data.hashtag);
        console.log(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <DetailTopBlock>
      <div className='detail-inner-box'>
        {/* 뒤로가기버튼 */}
        <div className='detail-header-box'>
          <NavLink className='back-btn'>
            <BiArrowBack size={'18px'} />
          </NavLink>
        </div>
        {/* 상품이미지 */}
        <div className='detail-item-img-box'>
          <img src='' alt='' />
        </div>
        {/* 상품텍스트 */}
        <div className='detail-item-text-box'>
          <div className='item-title'>
            <span>제목</span>
          </div>
          <div className='item-category'>
            <span>카테고리</span>
          </div>
          {/* map돌려야할 부분 */}
          <ul className='item-tag'>
            {hashtag &&
              hashtag.map((tag, index) => {
                return <li>{tag}</li>;
              })}
          </ul>
        </div>
      </div>
    </DetailTopBlock>
  );
};

export default DetailTop;
