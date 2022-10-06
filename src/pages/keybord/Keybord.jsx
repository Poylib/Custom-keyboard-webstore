import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Hangul from 'hangul-js';

const KeybordBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
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
      border: none;
    }
    /* 숫자 */
    .number {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      button {
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
    /* 텍스트 */
    .textkey {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 3px;
        margin-bottom: 7px;
        cursor: pointer;
        &:nth-of-type(11) {
          margin-left: 7px;
        }
      }
    }
    /* 쉬프트/백스페이스 */
    .shiftkey {
      position: relative;
      li {
        cursor: pointer;
        .shift {
          position: absolute;
          bottom: 7px;
          right: 130px;
          width: 50px;
        }
        .back {
          position: absolute;
          bottom: 7px;
          left: 130px;
          width: 50px;
          width: 50px;
        }
      }
    }
    /* 기능키 */
    .funkey {
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
  const [change, setChange] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [number, setNumber] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
  const [text, setText] = useState(['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ']);
  const [keyValue, setKeyValue] = useState([]);

  const changeLanguage = () => {
    if (change == true) {
      setText(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']);
    } else {
      setText(['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ']);
    }
    return setChange(!change);
  };

  const changeUppercase = () => {
    if (change == true) {
      if (uppercase == true) {
        setText(['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅒ', 'ㅖ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ']);
      } else {
        setText(['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ']);
      }
    } else {
      if (uppercase == false) {
        setText(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']);
      } else {
        setText(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']);
      }
    }
    return setUppercase(!uppercase);
  };

  return (
    <KeybordBlock>
      <div className='keybord-inner-box'>
        <div className='keybord-input-box'>
          <input type='text' id='textValue' placeholder='키를 입력해보세요' value={Hangul.assemble(keyValue)}></input>
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
            number.map((text, index) => {
              return (
                <button
                  className='key'
                  key={index}
                  value={text}
                  onClick={() => {
                    let copy = [...keyValue, text];
                    setKeyValue(copy);
                  }}
                >
                  {text}
                </button>
              );
            })}
        </ul>
        {/* 단어키 */}
        <ul className='textkey'>
          {text &&
            text.map((text, index) => {
              return (
                <button
                  className='key'
                  key={index}
                  value={text}
                  onClick={() => {
                    let copy = [...keyValue, text];
                    setKeyValue(copy);
                    setText(['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ']);
                  }}
                >
                  {text}
                </button>
              );
            })}
        </ul>
        {/* 기능키 */}
        <ul className='shiftkey'>
          <li id='shift'>
            <span
              className='key shift'
              onClick={() => {
                changeUppercase(!uppercase);
              }}
            >
              &#8679;
            </span>
          </li>
          <li id='back'>
            <span
              className='key back'
              onClick={() => {
                let copy = [...keyValue];
                copy.pop();
                setKeyValue(copy);
              }}
            >
              &#8678;
            </span>
          </li>
        </ul>
        <ul className='funkey'>
          <li id='num'>
            <span className='key num'>!@#</span>
          </li>
          <li id='null'>
            <span
              className='key null'
              onClick={() => {
                changeLanguage();
              }}
            ></span>
          </li>
          <li id='emoji'>
            <span
              className='key emoji'
              onClick={() => {
                let emogi = ':-)';
                let copy = [...keyValue, emogi];
                setKeyValue(copy);
              }}
            >
              :-)
            </span>
          </li>
          <li id='space'>
            <span className='key space' 
                          onClick={() => {
                            let space = ' ';
                            let copy = [...keyValue, space];
                            setKeyValue(copy);
                          }}></span>
          </li>
          <li id='dot'>
            <span className='key'               onClick={() => {
                let dot = '.';
                let copy = [...keyValue, dot];
                setKeyValue(copy);
              }}>.</span>
          </li>
          <li id='space-line'>
            <span className='key space-line'               onClick={() => {
                let emogi = `\n`;
                let copy = [...keyValue, emogi];
                setKeyValue(copy);
              }}>&#9166;</span>
          </li>
        </ul>
      </div>
    </KeybordBlock>
  );
};

export default Keybord;
