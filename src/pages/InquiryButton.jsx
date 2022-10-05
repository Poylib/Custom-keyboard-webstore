import styled from 'styled-components';

const InquiryButton = () => {
  return <StyledButton>상품 문의</StyledButton>;
};

export default InquiryButton;

const StyledButton = styled.button`
  width: 90%;
  padding: 8px 0;
  border: 3px solid var(--pink);
  background-color: #fff;
  border-radius: 20px;
  margin-top: 24px;

  font-size: 14px;
  font-weight: 700;
  color: var(--pink);

  @media screen and (min-width: 540px) and (max-width: 768px) {
    width: 90%;
    padding: 8px 0;
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
    border-radius: 30px;
    padding: 20px 0;
    font-size: 20px;
  }
`;
