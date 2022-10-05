import { useState } from 'react';
import styled from 'styled-components';

const KeybordBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    /* 키보드 인풋 */
    .keybord-input-box {
      width: 100%;
      input[type='text'] {
        width: 100%;
        height: 35px;
        border-radius: 10px;
        border: 1px solid #aaa;
      }
    }
    /* 키보드 헤더 */
    .keybord-header-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      padding: 10px 0px;
      span {
        display: block;
        width: 20px;
        height: 20px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
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
    .number {
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
        cursor: pointer;
        span {
          height: 30px;
        }
      }
    }
    /* 키보드 두번째 라인(ㅂ~ㅔ)) */
    .textkey {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 3px;
        margin-bottom: 7px;
        cursor: pointer;
        &:nth-of-type(11){
            margin-left: 10px;
        }
        &:nth-of-type(20){
            width: 46px;
        }
        &:nth-of-type(28){
            width: 46px;
        }
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
        cursor: pointer;
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
        cursor: pointer;
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
        cursor: pointer;
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

const Keybord = () => {
  const [number, setNumber] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
  const [text, setText] = useState(['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', '⇧', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', '⇦']);
  //   노멀
  //  ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ']

  // 쉬프트
  //  ['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅒ', 'ㅖ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ']
  const [english, setEnglish] = useState(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']);
  //   노멀
  //   ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

  // 쉬프트
  //['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']


  console.log(text);

  return (
    <KeybordBlock>
      <div className='keybord-inner-box'>
        <div className='keybord-input-box'>
          <input type='text' />
        </div>
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
        {/* 숫자키 */}
        <ul className='number'>
          {number &&
            number.map((number, index) => {
              return (
                <li className='key' key={index}>
                  {number}
                </li>
              );
            })}
        </ul>

        {/* 단어키 */}
        <ul className='textkey'>
          {text &&
            text.map((text, index) => {
              return (
                <li className='key' key={index}>
                  {text}
                </li>
              );
            })}
        </ul>
      </div>
    </KeybordBlock>
  );
};

export default Keybord;
