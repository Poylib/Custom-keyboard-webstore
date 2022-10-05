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
`;

const StyledButton = styled.button`
  color: #fff;
  width: 94%;
  background: var(--pink);
  border-radius: 30px;
  border: 0;
  padding: 4px 0;

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: 700;
    line-height: 24px;

    img {
      margin: 0 6px;
    }
  }

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
`;
