import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiUpload } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi';

const DetailTop = ({ props }) => {
  const { hashtag, imageUrl, name, creator } = props;

  return (
    <DetailTopBlock>
      <div className='detail-inner-box'>
        {/* 뒤로가기버튼 */}
        <div className='detail-header-box'>
          <NavLink to='/' className='back-btn'>
            <BiArrowBack />
          </NavLink>
        </div>
        {/* 상품이미지 */}
        <div className='detail-item-img-box'>
          <img src={imageUrl} alt='' />
        </div>
        {/* 상품텍스트 */}
        <div className='detail-item-text-box'>
          <div className='item-title'>
            <span>{name}</span>
            <span className='download-btn'>
              <FiUpload />
            </span>
          </div>
          <div className='item-creator'>
            <span>{creator}</span>
          </div>
          {/* map돌려야할 부분 */}
          <ul className='item-tag'>
            {hashtag &&
              hashtag.map((tag, index) => {
                return <li key={index}>{tag}</li>;
              })}
          </ul>
        </div>
      </div>
    </DetailTopBlock>
  );
};

const DetailTopBlock = styled.div`
  .detail-inner-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 375px;
    height: 100%;

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
      border-radius: 10px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
      }
    }
    /* 상품텍스트 */
    .detail-item-text-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      .item-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        font: bold 20px/1 'Noto Sans KR';
        color: #42444c;
        .download-btn {
          svg {
            width: 20px;
            height: 20px;
            color: #919299;
          }
        }
      }
      .item-creator {
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
export default DetailTop;
