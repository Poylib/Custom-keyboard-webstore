import styled from 'styled-components';

const EnglishBlock = styled.div`
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
            cursor: pointer;
            img{
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
        cursor: pointer;
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
        cursor: pointer;
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

const English = () => {
  return (
    <EnglishBlock>
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
          <li id=' q'>
            <span className='key'>q</span>
          </li>
          <li id='w'>
            <span className='key'>w</span>
          </li>
          <li id='e'>
            <span className='key'>e</span>
          </li>
          <li id='r'>
            <span className='key'>r</span>
          </li>
          <li id='t'>
            <span className='key'>t</span>
          </li>
          <li id='y'>
            <span className='key'>y</span>
          </li>
          <li id='u'>
            <span className='key'>u</span>
          </li>
          <li id='i'>
            <span className='key'>i</span>
          </li>
          <li id='o'>
            <span className='key'>o</span>
          </li>
          <li id='p'>
            <span className='key'>p</span>
          </li>
        </ul>
        <ul className='keyline-3'>
          <li id='a'>
            <span className='key'>a</span>
          </li>
          <li id='s'>
            <span className='key'>s</span>
          </li>
          <li id='d'>
            <span className='key'>d</span>
          </li>
          <li id='f'>
            <span className='key'>f</span>
          </li>
          <li id='g'>
            <span className='key'>g</span>
          </li>
          <li id='h'>
            <span className='key'>h</span>
          </li>
          <li id='j'>
            <span className='key'>j</span>
          </li>
          <li id='k'>
            <span className='key'>k</span>
          </li>
          <li id='l'>
            <span className='key'>l</span>
          </li>
        </ul>
        <ul className='keyline-4'>
          <li id='shift'>
            <span className='key shift'>&#8679;</span>
          </li>
          <li id='z'>
            <span className='key'>z</span>
          </li>
          <li id='x'>
            <span className='key'>x</span>
          </li>
          <li id='c'>
            <span className='key'>c</span>
          </li>
          <li id='v'>
            <span className='key'>v</span>
          </li>
          <li id='b'>
            <span className='key'>b</span>
          </li>
          <li id='n'>
            <span className='key'>n</span>
          </li>
          <li id='m'>
            <span className='key'>m</span>
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
    </EnglishBlock>
  );
};

export default English;
