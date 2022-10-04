import styled from 'styled-components';
import Contents from '../components/themeComponents/Contents';

const Theme = () => {
  return (
    <StyledTheme>
      <Contents />
    </StyledTheme>
  );
};

export default Theme;

const StyledTheme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
