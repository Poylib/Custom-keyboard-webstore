import styled from 'styled-components';

const InquiryButton = () => {
  return <StyledButton>상품 문의</StyledButton>;
};

export default InquiryButton;

const StyledButton = styled.button`
  width: 90%;
  padding: 8px 0;
  border: 3px solid #ff417d;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 24px;

  font-size: 14px;
  font-weight: 700;
  color: #ff417d;
`;
