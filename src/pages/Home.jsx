import Items from '../components/Items'
import styled from 'styled-components';

import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';


const Home = () => {
  return (
    <>
      <Items/>
      <Container>
        <Nav />
        <Footer />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin: 0px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
`;

export default Home;
