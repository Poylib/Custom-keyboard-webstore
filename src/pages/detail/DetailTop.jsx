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
export default DetailTop;

const DetailTopBlock = styled.div`
  width: 100%;
  padding: 0px 18px;
  .detail-inner-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
    /* 뒤로가기버튼 */
    .detail-header-box {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      margin: 10px 0px 5px 0px;
      .back-btn {
        cursor: pointer;
        svg {
          width: 35px;
          height: 35px;
          color: #2e2f33;
        }
      }
    }
    /* 상품이미지 */
    .detail-item-img-box {
      width: 100%;
      height: 100%;
      background: #ddd;
      margin-bottom: 30px;
      border-radius: 10px;
      cursor: pointer;
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
        margin-bottom: 20px;
        font: bold 35px/1 'Noto Sans KR';
        color: #42444c;
        .download-btn {
          cursor: pointer;
          svg {
            width: 35px;
            height: 35px;
            color: #919299;
          }
        }
      }
      .item-creator {
        display: flex;
        margin-bottom: 25px;
        font: 25px/1 'Noto Sans KR';
        color: #919299;
        cursor: pointer;
      }
      .item-tag {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 15px;
        font: 20px/1 'Noto Sans KR';
        color: #42444c;
        cursor: pointer;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 35px;
          margin-right: 5px;
          margin-bottom: 10px;
          padding: 0px 10px;
          border-radius: 20px;
          background: #ebedf5;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .detail-inner-box {
      /* 뒤로가기버튼 */
      .detail-header-box {
        .back-btn {
          svg {
            width: 35px;
            height: 35px;
          }
        }
      }
      /* 상품텍스트 */
      .detail-item-text-box {
        .item-title {
          margin-bottom: 20px;
          font: bold 35px/1 'Noto Sans KR';
          .download-btn {
            svg {
              width: 35px;
              height: 35px;
            }
          }
        }
        .item-creator {
          margin-bottom: 25px;
          font: 25px/1 'Noto Sans KR';
        }
        .item-tag {
          margin-bottom: 15px;
          font: 20px/1 'Noto Sans KR';
          li {
            height: 35px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 540px) {
    .detail-inner-box {
      /* 뒤로가기버튼 */
      .detail-header-box {
        .back-btn {
          svg {
            width: 25px;
            height: 25px;
          }
        }
      }
      /* 상품텍스트 */
      .detail-item-text-box {
        .item-title {
          margin-bottom: 15px;
          font: bold 27px/1 'Noto Sans KR';
          .download-btn {
            svg {
              width: 25px;
              height: 25px;
            }
          }
        }
        .item-creator {
          margin-bottom: 25px;
          font: 18px/1 'Noto Sans KR';
        }
        .item-tag {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 15px;
          font: 15px/1 'Noto Sans KR';
          color: #42444c;
          cursor: pointer;
          li {
            height: 30px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 375px) {
    .detail-inner-box {
      /* 뒤로가기버튼 */
      .detail-header-box {
        .back-btn {
          cursor: pointer;
          svg {
            width: 24px;
            height: 24px;
          }
        }
      }
      /* 상품이미지 */
      .detail-item-img-box {
      }
      /* 상품텍스트 */
      .detail-item-text-box {
        .item-title {
          margin-bottom: 10px;
          font: bold 20px/1 'Noto Sans KR';
          .download-btn {
            svg {
              width: 20px;
              height: 20px;
              color: #919299;
            }
          }
        }
        .item-creator {
          margin-bottom: 15px;
          font: 15px/1 'Noto Sans KR';
          color: #919299;
        }
        .item-tag {
          margin-bottom: 15px;
          font: 15px/1 'Noto Sans KR';
        }
      }
    }
  }
`;
