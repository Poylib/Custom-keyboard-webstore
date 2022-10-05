import styled from 'styled-components';

const KoreanBlock = styled.div`
  .keybord-inner-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 375px;
    height: 100%;
    padding: 5px;
    border: 1px solid #000;
    background: #efeef3;
    /* 키보드 헤더 */
    .keybord-header-box{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 10px 0px;
        span{
            display: block;
            width: 20px;
            height: 20px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    /* 키버튼 공통 CSS */
    .key {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      color: #888;
      width: 30px;
      height: 35px;
      box-shadow: 1px 2px 2px #ddd;
      font: 18px/1 'apple';
      border-radius: 7px;
    }
    /* 키보드 첫번째 라인(1~0) */
    .keyline-1 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 3px;
        margin-bottom: 7px;
        span {
          height: 30px;
        }
      }
    }
    /* 키보드 두번째 라인(ㅂ~ㅔ)) */
    .keyline-2 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 3px;
        margin-bottom: 7px;
      }
    }
    /* 키보드 세번째 라인(ㅁ~ㅣ) */
    .keyline-3 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 3px;
        margin-bottom: 5px;
      }
    }
    /* 키보드 네번째 라인(쉬프트~백스페이스) */
    .keyline-4 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 3px;
        margin-bottom: 5px;
        .shift {
          width: 50px;
        }
        .back {
          width: 50px;
        }
      }
    }
    /* 키보드 다섯번째 라인(특문~줄띄우기) */
    .keyline-5 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 3px;
        .num {
          width: 50px;
        }
        .space {
          width: 140px;
        }
        .space-line {
          width: 50px;
        }
      }
    }
  }
`;

const Korean = () => {
  return (
    <KoreanBlock>
      <div className='keybord-inner-box'>
        <div className='keybord-header-box'>
          <span className='btn-1'>
            <img src='https://ifh.cc/g/Zz0Jht.webp' alt='' />
          </span>
          <span className='btn-2'>
            <img src='https://ifh.cc/g/FRZfnj.webp' alt='' />
          </span>
          <span className='btn-3'>
            <img src='https://ifh.cc/g/zgG37g.webp' alt='' />
          </span>
          <span className='btn-4'>
            <img src='https://ifh.cc/g/9LZR8r.webp' alt='' />
          </span>
          <span className='btn-5'>
            <img src='https://ifh.cc/g/cMK9Nr.webp' alt='' />
          </span>
          <span className='btn-6'>
            <img src='https://ifh.cc/g/1Khnc9.png' alt='' />
          </span>
        </div>
        <ul className='keyline-1'>
          <li id='1'>
            <span className='key'>1</span>
          </li>
          <li id='2'>
            <span className='key'>2</span>
          </li>
          <li id='3'>
            <span className='key'>3</span>
          </li>
          <li id='4'>
            <span className='key'>4</span>
          </li>
          <li id='5'>
            <span className='key'>5</span>
          </li>
          <li id='6'>
            <span className='key'>6</span>
          </li>
          <li id='7'>
            <span className='key'>7</span>
          </li>
          <li id='8'>
            <span className='key'>8</span>
          </li>
          <li id='9'>
            <span className='key'>9</span>
          </li>
          <li id='0'>
            <span className='key'>0</span>
          </li>
        </ul>
        <ul className='keyline-2'>
          <li id='ㅂ'>
            <span className='key'>ㅂ</span>
          </li>
          <li id='ㅈ'>
            <span className='key'>ㅈ</span>
          </li>
          <li id='ㄷ'>
            <span className='key'>ㄷ</span>
          </li>
          <li id='ㄱ'>
            <span className='key'>ㄱ</span>
          </li>
          <li id='ㅅ'>
            <span className='key'>ㅅ</span>
          </li>
          <li id='ㅛ'>
            <span className='key'>ㅛ</span>
          </li>
          <li id='ㅕ'>
            <span className='key'>ㅕ</span>
          </li>
          <li id='ㅑ'>
            <span className='key'>ㅑ</span>
          </li>
          <li id='ㅐ'>
            <span className='key'>ㅐ</span>
          </li>
          <li id='ㅔ'>
            <span className='key'>ㅔ</span>
          </li>
        </ul>
        <ul className='keyline-3'>
          <li id='ㅁ'>
            <span className='key'>ㅁ</span>
          </li>
          <li id='ㄴ'>
            <span className='key'>ㄴ</span>
          </li>
          <li id='ㅇ'>
            <span className='key'>ㅇ</span>
          </li>
          <li id='ㄹ'>
            <span className='key'>ㄹ</span>
          </li>
          <li id='ㅎ'>
            <span className='key'>ㅎ</span>
          </li>
          <li id='ㅗ'>
            <span className='key'>ㅗ</span>
          </li>
          <li id='ㅓ'>
            <span className='key'>ㅓ</span>
          </li>
          <li id='ㅏ'>
            <span className='key'>ㅏ</span>
          </li>
          <li id='ㅣ'>
            <span className='key'>ㅣ</span>
          </li>
        </ul>
        <ul className='keyline-4'>
          <li id='shift'>
            <span className='key shift'>&#8679;</span>
          </li>
          <li id='ㅋ'>
            <span className='key'>ㅋ</span>
          </li>
          <li id='ㅌ'>
            <span className='key'>ㅌ</span>
          </li>
          <li id='ㅊ'>
            <span className='key'>ㅊ</span>
          </li>
          <li id='ㅍ'>
            <span className='key'>ㅍ</span>
          </li>
          <li id='ㅠ'>
            <span className='key'>ㅠ</span>
          </li>
          <li id='ㅜ'>
            <span className='key'>ㅜ</span>
          </li>
          <li id='ㅡ'>
            <span className='key'>ㅡ</span>
          </li>
          <li id='back'>
            <span className='key back'>&#8678;</span>
          </li>
        </ul>
        <ul className='keyline-5'>
          <li id='num'>
            <span className='key num'>!@#</span>
          </li>
          <li id='null'>
            <span className='key null'></span>
          </li>
          <li id='emoji'>
            <span className='key emoji'>:-)</span>
          </li>
          <li id='space'>
            <span className='key space'></span>
          </li>
          <li id='dot'>
            <span className='key'>.</span>
          </li>
          <li id='space-line'>
            <span className='key space-line'>&#9166;</span>
          </li>
        </ul>
      </div>
    </KoreanBlock>
  );
};

export default Korean;
