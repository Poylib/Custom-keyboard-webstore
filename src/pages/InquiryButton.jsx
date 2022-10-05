import styled from 'styled-components';

const InquiryButton = () => {
  return <StyledButton>상품 문의</StyledButton>;
};

export default InquiryButton;

const StyledButton = styled.button`
  width: 90%;
  margin-top: 24px;
  padding: 8px 0;
  color: var(--pink);
  background-color: #fff;
  border: 3px solid var(--pink);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  @media screen and (min-width: 540px) and (max-width: 768px) {
    width: 88%;
    padding: 10px 0;
    border-radius: 30px;
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    width: 86%;
    padding: 12px 0;
    border-radius: 40px;
    font-size: 20px;
  }
`;
