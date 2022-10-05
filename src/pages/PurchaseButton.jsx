import styled from 'styled-components';

const PurchaseButton = ({ price }) => {
  return (
    <PurchaseButtonWrapper>
      <StyledButton>
        <p>
          구매 <img src='/images/icon_dia_type3.png' alt='icon' />
          {price}
        </p>
        <span>광고제거·무제한 사용</span>
      </StyledButton>
    </PurchaseButtonWrapper>
  );
};

export default PurchaseButton;

const PurchaseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 9px 0;
  margin-top: 24px;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 540px) and (max-width: 768px) {
    padding: 15px 0;
  }

  @media screen and (min-width: 768px) {
    padding: 20px 0;
  }
`;

const StyledButton = styled.button`
  color: #fff;
  width: 94%;
  background: var(--pink);
  border-radius: 30px;
  border: 0;
  padding: 4px 0;

  @media screen and (min-width: 540px) and (max-width: 768px) {
    width: 92%;
    padding: 6px 0;
  }

  @media screen and (min-width: 768px) {
    width: 90%;
    border-radius: 40px;
    padding: 8px 0;
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
      margin: 0 6px;

      @media screen and (min-width: 768px) {
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
