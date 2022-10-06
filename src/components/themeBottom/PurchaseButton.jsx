import styled from 'styled-components';

import dia from '../../assets/Theme/dia.svg';

const PurchaseButton = ({ price }) => {
  return (
    <PurchaseButtonWrapper>
      <StyledButton>
        <p>
          구매 <img src={dia} alt='icon' />
          {price}
        </p>
        <span>광고제거·무제한 사용</span>
      </StyledButton>
    </PurchaseButtonWrapper>
  );
};

export default PurchaseButton;

const PurchaseButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 9px 0;
  margin-top: 24px;
  box-shadow: 0px -6px 9px -7px #00000026;

  @media screen and (min-width: 540px) and (max-width: 768px) {
    padding: 15px 0;
  }

  @media screen and (min-width: 768px) {
    padding: 20px 0;
  }
`;

const StyledButton = styled.button`
  width: 94%;
  padding: 4px 0;
  color: #fff;
  background: var(--pink);
  border: 0;
  border-radius: 30px;
  cursor: pointer;

  @media screen and (min-width: 540px) and (max-width: 768px) {
    width: 92%;
    padding: 6px 0;
  }

  @media screen and (min-width: 768px) {
    width: 90%;
    padding: 8px 0;
    border-radius: 40px;
  }


  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;

    @media screen and (min-width: 540px) and (max-width: 768px) {
      font-size: 15px;
      line-height: 26px;
    }

    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 30px;
    }

    img {
      width: 2.5vh;
      margin: 0 6px;

      @media screen and (min-width: 768px) {
        width: 20px;
        margin: 0 10px;
      }

    }
  }

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;


    @media screen and (min-width: 540px) and (max-width: 768px) {
      font-size: 13px;
    }

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }

  }
`;
