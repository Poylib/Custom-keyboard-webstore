import { useState } from 'react';
import styled from 'styled-components';

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
    }
    /* 숫자 */
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
    /* 텍스트 */
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
//  * 쉬프트/백스페이스/한영키/스페이스/닷/문단변경 버튼은 따로 map을 돌리면 안될것같음 onClick 이벤트가 따로 들어가야 되기 때문(?)
//   1. 스테이트에 빈배열을 만들고
//   2. 단어 onClick시 해당 단어를 스테이트 빈배열에 추가 (array.push)
//   3. 인풋에 값을 넣을때는 Hangul.assemble(arr:string[]) 이용해서 배열에 값넣기
//   4. 인풋에서 값을 삭제할때는 Hangul.disassemble(str:string, grouped:boolean = false) 을 이용해 배열뒤에서부터 제거 (array.pop 사용)
//   5. 쉬프트 클릭시 한글은 쌍자음 영어는 대문자로 스테이트 값 변경 (트루/펄스로 한/영 비교 한뒤에 스테이트 변경)
//   6. 한/영 키 누를시 (한/영 스테이트 변경)

const Keybord = () => {
  const [change, setChange] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [number, setNumber] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
  const [text, setText] = useState(['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ']);

  // ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ'];
  // ['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅒ', 'ㅖ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ'];
  // ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
  //['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

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
        setText(['ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅒ', 'ㅖ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ'])
      } else {
        setText( ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ']);
      }
    } else {
      if (uppercase == false) {
        setText(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']);
      } else {
        setText(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']);
      }
    }
    return setUppercase(!uppercase)
  };

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
        {/* 기능키 */}
        <ul className='shiftkey'>
          <li id='shift'>
            <span
              className='key shift'
              onClick={() => {
                changeUppercase();
              }}
            >
              &#8679;
            </span>
          </li>
          <li id='back'>
            <span className='key back'>&#8678;</span>
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
    </KeybordBlock>
  );
};

export default Keybord;
