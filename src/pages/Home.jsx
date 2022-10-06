import styled from 'styled-components';
import { useState } from 'react';

import Items from '../components/Items';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';

const Home = () => {
  const [type, setType] = useState('NEW');

  return (
    <>
      <Container>
        <Nav type={type} setType={setType} />
        <Items type={type} />
        <Footer />
      </Container>
    </>
  );

};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-device-width: 769px) {
    max-width: 650px;
  }
  @media screen and (min-device-width: 541px) and (max-device-width: 768px) {
    max-width: 768px;
  }
  min-height: 100vh;
  margin: 0px auto;
  padding: 10px;
  background-color: rgb(255, 255, 255);
`;

export default Home;
