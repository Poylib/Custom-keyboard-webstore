import styled from 'styled-components';

const InquiryButton = () => {
  return <StyledButton>상품 문의</StyledButton>;
};

export default InquiryButton;

const StyledButton = styled.button`
  width: 90%;
  margin-top: 24px;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 700;
  color: var(--pink);
  background-color: #fff;
  border-radius: 20px;
  border: 3px solid var(--pink);
  cursor: pointer;

  @media screen and (min-width: 540px) and (max-width: 768px) {
    width: 88%;
    padding: 10px 0;
    font-size: 18px;
    border-radius: 30px;
  }

  @media screen and (min-width: 768px) {
    width: 86%;
    padding: 12px 0;
    font-size: 20px;
    border-radius: 40px;
  }
`;
