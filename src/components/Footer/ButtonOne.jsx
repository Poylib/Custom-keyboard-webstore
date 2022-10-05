import styled from 'styled-components';

const ButtonOne = ({ imgUrl, navName }) => {
  return (
    <>
      <Wrapper>
        <button
          style={{
            background: `url(${imgUrl}) no-repeat center`,
            backgroundSize: 'contain',
          }}
        />
        <span>{navName}</span>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 100%;
  button {
    border: none;
    width: 5.5vh;
    height: 4.5vh;
    margin-bottom: 1vh;
    cursor: pointer;
  }
  span {
    font-size: 0.9em;
  }
`;

export default ButtonOne;
